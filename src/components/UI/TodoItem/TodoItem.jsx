import React, { useState } from 'react';
import { useStyles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';

import {
    DELETE_TODO,
    SET_CURRENT_TODO,
    EDIT_TODO_TITLE,
    SET_TODO_COMPLETED,
    SET_TODO_IMPORTANT,
    SET_TODO_PROCESS,
} from '../../../redux/todos/actions';
import { getCategorySelector } from '../../../redux/category/selectors';

import { Typography } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Badge from '../Badge/Badge';
import TodoEditForm from '../TodoEditForm/TodoEditForm';
import TodoMenu from '../TodoMenu/TodoMenu';

// ---------------------------------------------------------------------------------------------------------------------
const TodoItem = ({ props }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const category = useSelector(getCategorySelector);

    const [title, setTitle] = useState(props.title);
    const [isEdit, setIsEdit] = useState(false);
    const [checked, setChecked] = useState(props.statuses.completed);

    const onChange = (e) => setTitle(e.target.value);

    const onEdit = () => setIsEdit(true);

    const setCurrentTodo = () => dispatch(SET_CURRENT_TODO.TRIGGER({ id: props.id }));

    const onDelete = () => dispatch(DELETE_TODO.TRIGGER({ category, id: props.id, title }));

    const onEditTitle = () => {
        dispatch(EDIT_TODO_TITLE.TRIGGER({ category, id: props.id, title }));
        setIsEdit(false);
    };

    const onCompleted = () => {
        const value = !props.statuses.completed;
        setChecked(!checked);
        dispatch(SET_TODO_COMPLETED.TRIGGER({ category, id: props.id, value, title }));
    };

    const onImportant = () => {
        const value = !props.statuses.important;
        dispatch(SET_TODO_IMPORTANT.TRIGGER({ category, id: props.id, value, title }));
    };

    const onProcess = () => {
        const value = !props.statuses.process;
        dispatch(SET_TODO_PROCESS.TRIGGER({ category, id: props.id, value, title }));
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
                        {props.statuses.process && <Badge title="In process" color="warning" />}
                        {props.statuses.important && <Badge title="Important" color="secondary" />}
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
