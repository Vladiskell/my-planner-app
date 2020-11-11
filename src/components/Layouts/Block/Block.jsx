import React from 'react';
import { useStyles } from './styles';
import classnames from 'classnames';

import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

// ---------------------------------------------------------------------------------------------------------------------
const Block = ({ isHeader = true, title, children, headerChildren, centerBody = false }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.block} elevation={3}>
            {isHeader && (
                <div className={classes.header}>
                    <Typography variant={'body1'}>{title}</Typography>
                    {headerChildren}
                </div>
            )}
            <div
                className={classnames(
                    classes.body,
                    !isHeader && classes.withoutHeader,
                    centerBody && classes.centerBody
                )}
            >
                {children}
            </div>
        </Paper>
    );
};

export default Block;
