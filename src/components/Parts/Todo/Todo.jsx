import React, { useState } from 'react';
import { useStyles } from './styles';
import { useSelector } from 'react-redux';

import { getCategorySelector } from '../../../redux/category/selectors';

import AddTodo from '../../UI/TodoAddForm/TodoAddForm';
import TodoFilter from '../../UI/TodoFilter/TodoFilter';
import TodoList from '../../UI/TodoList/TodoList';
import Block from '../../Layouts/Block/Block';

// ---------------------------------------------------------------------------------------------------------------------
const Todo = () => {
    const classes = useStyles();
    const currentCategory = useSelector(getCategorySelector);

    const [filter, setFilter] = useState('All');

    const changeFilter = (value) => setFilter(value);

    return (
        <Block title={`${currentCategory.toUpperCase()} Todo List`}>
            <div className={classes.todo}>
                <AddTodo />
                <TodoFilter changeFilter={changeFilter} />
                <TodoList filter={filter} />
            </div>
        </Block>
    );
};

export default Todo;
