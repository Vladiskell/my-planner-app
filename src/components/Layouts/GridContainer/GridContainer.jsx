import React from 'react';
import { useStyles } from './styles';

// ---------------------------------------------------------------------------------------------------------------------
const GridContainer = ({ children }) => {
    const classes = useStyles();

    return <div className={classes.gridContainer}>{children}</div>;
};

export default GridContainer;
