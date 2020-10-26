import React, { useEffect } from 'react';
import { useStyles } from './styles';
import { useSelector } from 'react-redux';

import { todoCategoryGet } from '../../../redux/todos/selectors/selectors';

import AddTodo from '../../UI/TodoAddForm/TodoAddForm';
import TodoFilter from '../../UI/TodoFilter/TodoFilter';
import TodoList from '../../UI/TodoList/TodoList';
import Block from '../../Layouts/Block/Block';

// ---------------------------------------------------------------------------------------------------------------------
// component
const Todo = () => {
    const classes = useStyles();
    const category = useSelector(todoCategoryGet);

    return (
        <Block title={`${category.toUpperCase()} Todo List`}>
            <div className={classes.todo}>
                <AddTodo />
                <TodoFilter />
                <TodoList />
            </div>
        </Block>
    );
};

export default Todo;
