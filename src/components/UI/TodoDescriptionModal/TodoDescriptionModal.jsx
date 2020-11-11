import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStyles } from './styles';

import { getModalsSelector } from '../../../redux/modals/selectors';
import { closeModalsAction } from '../../../redux/modals/actions';
import { getCurrentTodoSelector } from '../../../redux/todos/selectors';
import { postTodoDescriptionAction } from '../../../redux/todos/actions';
import { getCategorySelector } from '../../../redux/category/selectors';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

// ---------------------------------------------------------------------------------------------------------------------
const TodoDescriptionModal = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const modals = useSelector(getModalsSelector);
    const currentCategory = useSelector(getCategorySelector);
    const currentTodo = useSelector(getCurrentTodoSelector);

    const [value, setValue] = useState('');

    useEffect(() => {
        if (currentTodo !== undefined) {
            setValue(currentTodo.description);
        }
    }, [currentTodo]);

    const onClose = () => dispatch(closeModalsAction());

    const onChange = (event) => setValue(event.target.value);

    const onSubmit = () => dispatch(postTodoDescriptionAction(currentCategory, currentTodo.id, value));

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
