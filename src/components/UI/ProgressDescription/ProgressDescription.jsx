import React, { useMemo } from 'react';
import { useStyles } from './styles';
import { useSelector } from 'react-redux';

import { getTodosSelector } from '../../../redux/todos/selectors';

import { Typography } from '@material-ui/core';

// ---------------------------------------------------------------------------------------------------------------------
const ProgressDescription = () => {
    const classes = useStyles();
    const todoList = useSelector(getTodosSelector);

    const lines = useMemo(
        () => [
            {
                text: 'In process',
                color: '#ff9800',
            },
            {
                text: 'Important',
                color: '#f45b68',
            },
            {
                text: 'Completed',
                color: '#1976d2',
            },
            {
                text: 'Other',
                color: '#4caf50',
            },
        ],
        []
    );

    return (
        <div className={classes.progressDescription}>
            <div className={classes.lines}>
                <Typography variant={'h6'}>Total: {todoList.length} todos</Typography>
                {lines.map((item) => (
                    <div className={classes.line} key={item.text}>
                        <div className={classes.circle} style={{ backgroundColor: item.color }}></div>
                        <Typography variant={'body2'}>{item.text}</Typography>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgressDescription;
