import React, { useState } from 'react';
import { useStyles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';

import * as API from '../../../api/todosApi';
import {
    deleteTodoAction,
    setCurrentTodoAction,
    setTodoIsCompletedAction,
    setTodoIsImportantAction,
    setTodoIsProcessAction,
    editTodoTitleAction,
    setTimesheetStatus,
} from '../../../redux/todos/actions/actions';
import { currentTodoGet, todoCategoryGet } from '../../../redux/todos/selectors/selectors';

import { Typography } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Badge from '../Badge/Badge';
import TodoEditForm from '../TodoEditForm/TodoEditForm';
import TodoMenu from '../TodoMenu/TodoMenu';
import { reportAddAction } from '../../../redux/report/actions/actions';

// -------------------------------------------------------------------------------------------------
// component
const TodoItem = ({ props }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const currentCategory = useSelector(todoCategoryGet);

    const [title, setTitle] = useState(props.title);
    const [isEdit, setIsEdit] = useState(false);

    const onChange = (e) => setTitle(e.target.value);

    const onEdit = () => setIsEdit(true);

    const setCurrentTodo = () => {
        dispatch(setCurrentTodoAction(props.id));
    };

    const onEditTitle = async () => {
        await API.updateTodo(currentCategory, props.id, 'title', title);

        API.postReport(currentCategory, title, props.id, 'Changed').then((report) => {
            dispatch(reportAddAction(report));
        });

        dispatch(editTodoTitleAction(props.id, title));
        setIsEdit(false);
    };

    const onCompleted = async () => {
        const value = !props.statuses.completed;

        await API.updateTodo(currentCategory, props.id, 'completed', value);

        if (value) {
            await API.postReport(currentCategory, title, props.id, 'Completed').then((report) => {
                dispatch(reportAddAction(report));
            });
        }

        dispatch(setTodoIsCompletedAction(props.id));
    };

    const onImportant = async () => {
        const value = !props.statuses.important;

        await API.updateTodo(currentCategory, props.id, 'important', value);

        if (value) {
            await API.postReport(currentCategory, title, props.id, 'Important').then((report) => {
                dispatch(reportAddAction(report));
            });
        }

        dispatch(setTodoIsImportantAction(props.id));
    };

    const onProcess = async () => {
        const value = !props.statuses.process;

        await API.updateTodo(currentCategory, props.id, 'process', value);
        // await API.updateTodo(currentCategory, props.id, 'timer', value);

        if (value) {
            await API.postReport(currentCategory, title, props.id, 'In process').then((report) => {
                dispatch(reportAddAction(report));
            });
        }

        dispatch(setTodoIsProcessAction(props.id));
        dispatch(setTimesheetStatus(props.id));
    };

    const onDelete = async () => {
        await API.deleteTodo(currentCategory, props.id);
        await API.postReport(currentCategory, title, props.id, 'Deleted').then((report) => {
            dispatch(reportAddAction(report));
        });
        dispatch(deleteTodoAction(props.id));
    };

    return (
        <React.Fragment>
            {!isEdit ? (
                <div className={classnames(classes.item, props.statuses.completed && classes.completed)}>
                    <FormControlLabel
                        className={classes.label}
                        control={<Checkbox />}
                        checked={props.statuses.completed}
                        name={props.id}
                        onChange={onCompleted}
                    />

                    <Typography className={classes.title} variant="body1" onClick={setCurrentTodo}>
                        {title}
                    </Typography>

                    <div className={classes.badges}>
                        {props.statuses.process && <Badge title={'In process'} color={'warning'} />}
                        {props.statuses.important && <Badge title={'Important'} color={'secondary'} />}
                    </div>

                    <TodoMenu
                        id={props.id}
                        completed={props.statuses.completed}
                        important={props.statuses.important}
                        process={props.statuses.process}
                        onImportant={onImportant}
                        onProcess={onProcess}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                </div>
            ) : (
                <TodoEditForm title={title} onChange={onChange} onEditTitle={onEditTitle} />
            )}
        </React.Fragment>
    );
};

export default TodoItem;
