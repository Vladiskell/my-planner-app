import React, { useState } from 'react'
import { useStyles } from './styles'

import { connect, useDispatch } from 'react-redux'
import * as API from '../../../api/todos'
import { addTodoAction } from '../../../redux/actions/actions'

import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import classnames from 'classnames'

// -------------------------------------------------------------------------------------------------
// component
const AddTodo = ({ collectionName }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const [focused, setFocused] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        API.postTodo(collectionName, value).then(() => {
            dispatch(addTodoAction(value))
            setValue('')
        })
    }

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const toggleFocused = () => setFocused((prevState) => !prevState)

    return (
        <form className={classnames(classes.addTodo, focused && classes.focusedForm)} onSubmit={onSubmit}>
            <InputBase
                className={classes.input}
                required
                placeholder="Add new todoList"
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
    )
}

export default connect()(AddTodo)
