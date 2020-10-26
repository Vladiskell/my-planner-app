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
    editTodoDescriptionAction,
    editTodoTitleAction,
} from '../../../redux/todos/actions/actions';
import { currentTodoGet, todoCategoryGet } from '../../../redux/todos/selectors/selectors';

import { Typography } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Badge from '../Badge/Badge';
import TodoEditForm from '../TodoEditForm/TodoEditForm';
import TodoMenu from '../TodoMenu/TodoMenu';

// -------------------------------------------------------------------------------------------------
// component
const TodoItem = ({ props }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const category = useSelector(todoCategoryGet);

    const [title, setTitle] = useState(props.title);
    const [isEdit, setIsEdit] = useState(false);

    const onChange = (e) => setTitle(e.target.value);

    const onEdit = () => setIsEdit(true);

    const setCurrentTodo = () => {
        dispatch(setCurrentTodoAction(props.id));
    };

    const onEditTitle = async () => {
        await API.updateTodo(category, props.id, 'title', title);
        dispatch(editTodoTitleAction(props.id, title));
        setIsEdit(false);
    };

    const onCompleted = async () => {
        const value = !props.statuses.completed;

        await API.updateTodo(category, props.id, 'completed', value);
        dispatch(setTodoIsCompletedAction(props.id));
    };

    const onImportant = async () => {
        const value = !props.statuses.important;

        await API.updateTodo(category, props.id, 'important', value);
        dispatch(setTodoIsImportantAction(props.id));
    };

    const onProcess = async () => {
        const value = !props.statuses.process;

        await API.updateTodo(category, props.id, 'process', value);
        dispatch(setTodoIsProcessAction(props.id));
    };

    const onDelete = async () => {
        await API.deleteTodo(category, props.id);
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
