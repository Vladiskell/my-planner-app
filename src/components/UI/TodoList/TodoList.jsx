import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import { useDispatch, useSelector } from 'react-redux';

import { GET_TODOS, getTodosAction } from '../../../redux/todos/actions';
import { getTodosSelector } from '../../../redux/todos/selectors';
import { getCategorySelector } from '../../../redux/category/selectors';

import CircularProgress from '@material-ui/core/CircularProgress';
import TodoItem from '../TodoItem/TodoItem';

// ---------------------------------------------------------------------------------------------------------------------
const TodoList = ({ filter }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const todos = useSelector(getTodosSelector);
    const category = useSelector(getCategorySelector);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        dispatch(GET_TODOS.TRIGGER({ category }));

        if (todos.length > 1) {
            setIsLoading(true);
        }
    }, [category]);

    const visibleTodos = () => {
        switch (filter) {
            case 'Completed':
                return todos.filter((item) => item.statuses.completed);
            case 'Uncompleted':
                return todos.filter((item) => !item.statuses.completed);
            case 'Important':
                return todos.filter((item) => item.statuses.important);
            default:
                return todos;
        }
    };

    return (
        <div className={classes.list}>
            {isLoading ? (
                visibleTodos().map((item) => <TodoItem key={item.id} props={item} />)
            ) : (
                <div className={classes.progress}>
                    <CircularProgress />
                </div>
            )}
        </div>
    );
};

export default TodoList;
