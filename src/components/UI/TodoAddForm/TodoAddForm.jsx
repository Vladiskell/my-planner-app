import React, { useState } from 'react';
import { useStyles } from './styles';
import classnames from 'classnames';
import { connect, useDispatch, useSelector } from 'react-redux';

import * as API from '../../../api/todosApi';
import { addTodoAction } from '../../../redux/todos/actions/actions';
import { todoCategoryGet } from '../../../redux/todos/selectors/selectors';

import InputBase from '@material-ui/core/InputBase';
import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { reportAddAction } from '../../../redux/report/actions/actions';

// ---------------------------------------------------------------------------------------------------------------------
// component
const TodoAddForm = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const category = useSelector(todoCategoryGet);

    const [value, setValue] = useState('');
    const [focused, setFocused] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        API.postTodo(category, value).then((result) => {
            API.postReport(category, value, result.id, 'Added').then((report) => {
                dispatch(reportAddAction(report));
            });
            dispatch(addTodoAction(result));
            setValue('');
        });
    };

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const toggleFocused = () => setFocused((prevState) => !prevState);

    return (
        <form className={classnames(classes.addTodo, focused && classes.focusedForm)} onSubmit={onSubmit}>
            <InputBase
                className={classes.input}
                required
                placeholder="Add new todo"
                value={value || ''}
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

export default connect()(TodoAddForm);
