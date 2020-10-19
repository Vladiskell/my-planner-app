import React from 'react';
import { useStyles } from './styles';

import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider'
import Paper from '@material-ui/core/Paper'

// -------------------------------------------------------------------------------------------------
// component
const SearchField = () => {
    const classes = useStyles();

    return (
        <div className={classes.searchField}>
            <Paper className={classes.form} component="form">
                <InputBase
                    className={classes.input}
                    placeholder="Search topics"
                />
                <Divider className={classes.divider} orientation="vertical" />
                <IconButton className={classes.button} type="submit">
                    <SearchIcon fontSize="small" />
                </IconButton>
            </Paper>
        </div>
    )
}

export default SearchField;
