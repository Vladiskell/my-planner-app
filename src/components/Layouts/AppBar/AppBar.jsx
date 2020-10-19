import React from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core';
import logo from '../../../assets/logo.svg';
import SearchField from '../../UI/SearchField/SearchField'

// -------------------------------------------------------------------------------------------------
// component
const AppBar = () => {
    const classes = useStyles();

    return (
        <header className={classes.appBar}>
            <div className={classes.logo}>
                <img src={logo} alt="" />
                <Typography variant="h6" component="span">My Planner</Typography>
            </div>
            <div className={classes.panel}>
                <SearchField />
            </div>
        </header>
    );
};

export default AppBar;

