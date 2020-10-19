import React, { useState } from 'react';
import { useStyles } from './styles';
import { uuid } from 'uuidv4';
import { useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';

// -------------------------------------------------------------------------------------------------
// component
const TodoFilter = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [active, setActive] = useState(0);

    const handleClick = (e) => {
        setActive(Number(e.currentTarget.dataset.index));
    };

    const buttons = [
        {
            text: 'All',
            onClick: (e) => {
                console.log('all');
                handleClick(e);
            },
        },
        {
            text: 'Completed',
            onClick: (e) => {
                console.log('completed');
                handleClick(e);
            },
        },
        {
            text: 'Important',
            onClick: (e) => {
                console.log('important');
                handleClick(e);
            },
        },
    ];

    return (
        <div className={classes.filter}>
            {buttons.map(({ onClick, text }, index) => (
                <Button
                    key={uuid()}
                    variant={index === active ? 'contained' : 'outlined'}
                    size='small'
                    color='primary'
                    disableElevation
                    data-index={index}
                    onClick={(e) => onClick(e)}
                >
                    {text}
                </Button>
            ))}
        </div>
    );
};

export default TodoFilter;
