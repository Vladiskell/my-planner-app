import React, { useEffect, useState } from 'react'
import { useStyles } from './styles'
import { connect, useDispatch } from 'react-redux'

import * as API from '../../../api/todos'
import { setTodoListAction } from '../../../redux/actions/actions'

import CircularProgress from '@material-ui/core/CircularProgress'
import TodoListItem from '../TodoListItem/TodoListItem'

// ---------------------------------------------------------------------------------------------------------------------
// component
const TodoList = ({ todos, collectionName }) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        API.getTodoList(collectionName).then((result) => {
            dispatch(setTodoListAction(result))
            setIsLoading(true)
        })
    }, [])

    return (
        <div className={classes.list}>
            {isLoading ? (
                todos.map((item) => <TodoListItem key={item.id} props={item} collectionName={collectionName} />)
            ) : (
                <div className={classes.progress}>
                    <CircularProgress />
                </div>
            )}
        </div>
    )
}

// ---------------------------------------------------------------------------------------------------------------------
// connect
const mapStateToProps = (state) => {
    return {
        todos: state.mainReducer,
    }
}

export default connect(mapStateToProps)(TodoList)
