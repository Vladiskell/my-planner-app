import React, { useEffect } from 'react';
import { useStyles } from './styles';

import Paper from "@material-ui/core/Paper";
import AddTodo from '../../UI/AddTodo/AddTodo'
import TodoFilter from '../../UI/TodoFilter/TodoFilter'
import TodoList from '../../UI/TodoList/TodoList'
import BlockHeader from '../../UI/BlockHeader/BlockHeader'

// -------------------------------------------------------------------------------------------------
// component
const Todo = ({ title, collectionName }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.todo}>
            <BlockHeader title={title} />
            <AddTodo collectionName={collectionName} />
            <TodoFilter />
            <TodoList collectionName={collectionName} />
        </Paper>
    )
};

export default Todo;
