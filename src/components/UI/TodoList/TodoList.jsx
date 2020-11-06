import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import { connect, useDispatch, useSelector } from 'react-redux';

import * as API from '../../../api/todosApi';
import { setTodoListAction } from '../../../redux/todos/actions/actions';

import CircularProgress from '@material-ui/core/CircularProgress';
import TodoItem from '../TodoItem/TodoItem';
import { todoCategoryGet, todoFilterGet, todoListGet } from '../../../redux/todos/selectors/selectors';

// ---------------------------------------------------------------------------------------------------------------------
// component
const TodoList = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const todoList = useSelector(todoListGet);
    const filter = useSelector(todoFilterGet);
    const currentCategory = useSelector(todoCategoryGet);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        API.getTodoList(currentCategory).then((result) => {
            dispatch(setTodoListAction(result));
            setIsLoading(true);
        });
    }, [currentCategory]);

    const todoFilter = () => {
        switch (filter) {
            case 'Completed':
                return todoList.filter((item) => item.statuses.completed);
            case 'Important':
                return todoList.filter((item) => item.statuses.important);
            case 'Uncompleted':
                return todoList.filter((item) => !item.statuses.completed);
            default:
                return todoList;
        }
    };

    const todoItems = todoFilter();

    return (
        <div className={classes.list}>
            {isLoading ? (
                todoItems.map((item) => <TodoItem key={item.id} props={item} />)
            ) : (
                <div className={classes.progress}>
                    <CircularProgress />
                </div>
            )}
        </div>
    );
};

export default TodoList;
