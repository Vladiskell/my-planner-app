import React from 'react'
import { useStyles } from './styles'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

// -------------------------------------------------------------------------------------------------
// component
const TodoDescriptionModal = ({ open, onClose, onSubmit, description, onChange }) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title" fullWidth>
                <DialogTitle id="form-dialog-title">Todo description</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        label="Type todo description"
                        onChange={onChange}
                        type="text"
                        value={description}
                        fullWidth
                        multiline
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={onSubmit} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default TodoDescriptionModal
