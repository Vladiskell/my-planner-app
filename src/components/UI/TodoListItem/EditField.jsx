import React, { useState } from 'react'
import { useStyles } from './styles'
import classnames from 'classnames'

import InputBase from '@material-ui/core/InputBase'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import SaveIcon from '@material-ui/icons/Save'

// -------------------------------------------------------------------------------------------------
// component
const EditField = ({ defaultText, onChange, onSave }) => {
    const classes = useStyles()
    const [focused, setFocused] = useState(false)

    const toggleFocused = () => setFocused((state) => !state)

    return (
        <form className={classnames(classes.editField, focused && classes.focusedForm)} onSubmit={onSave}>
            <InputBase
                className={classes.input}
                value={defaultText}
                onChange={onChange}
                onFocus={toggleFocused}
                onBlur={toggleFocused}
            />

            <Divider className={classes.divider} orientation="vertical" />

            <IconButton className={classes.iconButton} type="submit">
                <SaveIcon fontSize="small" />
            </IconButton>
        </form>
    )
}

export default EditField
