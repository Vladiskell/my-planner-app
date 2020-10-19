import React from 'react';
import { useStyles } from './styles';

// -------------------------------------------------------------------------------------------------
// component
const Component = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1>Component</h1>
        </div>
    )
}

export default Component;
