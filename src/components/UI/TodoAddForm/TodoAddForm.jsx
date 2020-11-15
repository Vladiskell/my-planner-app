import React, { useState } from 'react';
import { useStyles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import classnames from 'classnames';

import { ADD_TODO, postTodoAction } from '../../../redux/todos/actions';
import { getCategorySelector } from '../../../redux/category/selectors';

import InputBase from '@material-ui/core/InputBase';
import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

// ---------------------------------------------------------------------------------------------------------------------
const TodoAddForm = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const category = useSelector(getCategorySelector);

    const [title, setTitle] = useState('');
    const [focused, setFocused] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(ADD_TODO.TRIGGER({ category, title }));
        setTitle('');
    };

    const onChange = (e) => setTitle(e.target.value);
    const toggleFocused = () => setFocused((prevState) => !prevState);

    return (
        <form className={classnames(classes.addTodo, focused && classes.focusedForm)} onSubmit={onSubmit}>
            <InputBase
                className={classes.input}
                required
                placeholder="Add new todo"
                value={title || ''}
                onChange={onChange}
                onFocus={toggleFocused}
                onBlur={toggleFocused}
            />
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton className={classes.button} type="submit">
                <AddIcon fontSize="small" />
            </IconButton>
        </form>
    );
};

export default TodoAddForm;
