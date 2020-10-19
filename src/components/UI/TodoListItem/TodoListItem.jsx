import React, { useState } from 'react'
import { useStyles } from './styles'
import { useDispatch } from 'react-redux'
import classnames from 'classnames'

import * as API from '../../../api/todos'
import {
    deleteTodoAction,
    editTodoAction,
    setTodoIsCompletedAction,
    setTodoIsImportantAction,
    setTodoIsProcessAction,
} from '../../../redux/actions/actions'

import { Typography } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import ItemMenu from './ItemMenu'

import EditField from './EditField'
import Badges from './Badges'

// -------------------------------------------------------------------------------------------------
// component
const TodoListItem = ({ props, collectionName, onProgress }) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const [defaultText, setDefaultText] = useState(props.text)
    const [isEdit, setIsEdit] = useState(false)

    const onChange = (e) => setDefaultText(e.target.value)

    const onEdit = () => setIsEdit(true)

    const onSave = async () => {
        await API.editTodo(collectionName, props.id, defaultText)
        dispatch(editTodoAction(props.id, defaultText))
        setIsEdit(false)
    }

    const onCompleted = async (e) => {
        const { checked, name: itemId } = e.target
        await API.setTodoIsCompleted(collectionName, itemId)
        dispatch(setTodoIsCompletedAction(itemId, checked))
    }

    const onImportant = async () => {
        await API.setTodoIsImportant(collectionName, props.id)
        dispatch(setTodoIsImportantAction(props.id))
    }

    const onDelete = async () => {
        await API.deleteTodo(collectionName, props.id)
        dispatch(deleteTodoAction(props.id))
    }

    const onProcess = async () => {
        await API.setTodoIsProcess(collectionName, props.id)
        dispatch(setTodoIsProcessAction(props.id))
    }

    return (
        <React.Fragment>
            {!isEdit ? (
                <div className={classnames(classes.item, props.completed && classes.completed)}>
                    <FormControlLabel
                        className={classes.label}
                        control={<Checkbox />}
                        checked={props.completed}
                        name={props.id}
                        onChange={onCompleted}
                    />

                    <Typography className={classes.text} variant="body1">
                        {defaultText}
                    </Typography>

                    <Badges isProcess={props.process} isImportant={props.important} />

                    <ItemMenu
                        completed={props.completed}
                        important={props.important}
                        process={props.process}
                        id={props.id}
                        onImportant={onImportant}
                        onProcess={onProcess}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                </div>
            ) : (
                <EditField defaultText={defaultText} onChange={onChange} onSave={onSave} />
            )}
        </React.Fragment>
    )
}

export default TodoListItem
