import React, { useMemo } from 'react';
import { useStyles } from './styles';
import { useSelector } from 'react-redux';

import { todoListGet } from '../../../redux/todos/selectors/selectors';

import { Typography } from '@material-ui/core';
import { mocksTodos } from '../../../__mocks__/todos';

// -------------------------------------------------------------------------------------------------
// component
const ProgressDescription = () => {
    const classes = useStyles();
    const todoList = useSelector(todoListGet);

    const lines = useMemo(() => [
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
    ]);

    return (
        <div className={classes.progressDescription}>
            <div className={classes.lines}>
                <Typography variant={'h6'}>Total: {todoList.length} todos</Typography>
                {lines.map((item) => (
                    <div className={classes.line}>
                        <div className={classes.circle} style={{ backgroundColor: item.color }}></div>
                        <Typography variant={'body2'}>{item.text}</Typography>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgressDescription;
