import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './styles';

import * as API from '../../../api/todosApi';
import { modalsGet } from '../../../redux/modals/selectors/selectors';
import { modalsCloseAction } from '../../../redux/modals/actions/actions';
import { currentTodoGet, todoCategoryGet } from '../../../redux/todos/selectors/selectors';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { editTodoDescriptionAction } from '../../../redux/todos/actions/actions';

// -------------------------------------------------------------------------------------------------
// component
const TodoDescriptionModal = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const category = useSelector(todoCategoryGet);
    const modals = useSelector(modalsGet);
    const currentTodo = useSelector(currentTodoGet);

    const [value, setValue] = useState('');

    useEffect(() => {
        if (currentTodo !== undefined) {
            setValue(currentTodo.description);
        }
    }, [currentTodo]);

    const onClose = () => dispatch(modalsCloseAction());

    const onChange = (event) => setValue(event.target.value);

    const onSubmit = async () => {
        await API.updateTodo(category, currentTodo.id, 'description', value);
        dispatch(editTodoDescriptionAction(currentTodo.id, value));
        dispatch(modalsCloseAction());
    };

    return (
        <div className={classes.root}>
            <Dialog open={modals} fullWidth>
                <DialogTitle id="form-dialog-title">Todo description</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        label="Type todo description"
                        onChange={onChange}
                        type="text"
                        value={value}
                        fullWidth
                        multiline
                    />
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button color="primary" onClick={onSubmit}>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default TodoDescriptionModal;
