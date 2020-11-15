import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import { useSelector } from 'react-redux';

import { getCurrentTodoSelector, getProcessTodoSelector } from '../../../redux/todos/selectors';
import { getCategorySelector } from '../../../redux/category/selectors';

import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import Block from '../../Layouts/Block/Block';

// ---------------------------------------------------------------------------------------------------------------------
const Timer = () => {
    const classes = useStyles();

    const currentCategory = useSelector(getCategorySelector);
    const currentTodo = useSelector(getCurrentTodoSelector);
    const inProcessTodo = useSelector(getProcessTodoSelector);

    const [totalAmount, setTotalAmount] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const hours = Math.floor(totalAmount / 3600);
    const minutes = Math.floor((totalAmount - hours * 3600) / 60);
    const seconds = totalAmount - (hours * 3600 + minutes * 60);

    const time = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${
        seconds < 10 ? '0' + seconds : seconds
    }`;

    const onStart = () => setIsActive(true);
    const onPause = () => setIsActive(false);
    const onReset = () => {
        setIsActive(false);
        setTotalAmount(0);
    };

    useEffect(() => {
        if (isActive) {
            var interval = setInterval(() => {
                setTotalAmount((prevState) => prevState + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isActive, currentTodo]);

    return (
        <Block isHeader={false} centerBody>
            <Typography variant={'h4'}>Some block</Typography>
            {/*<Typography variant={'h6'} component={'span'} gutterBottom>*/}
            {/*    {inProcessTodo && inProcessTodo.title}*/}
            {/*</Typography>*/}
            {/*<Typography variant={'h3'} component={'span'}>*/}
            {/*    {time}*/}
            {/*</Typography>*/}
            {/*<div className={classes.controls}>*/}
            {/*    <Button variant={'contained'} onClick={onReset}>*/}
            {/*        Reset*/}
            {/*    </Button>*/}
            {/*    <Button variant={'contained'} color={'primary'} onClick={onStart}>*/}
            {/*        Start*/}
            {/*    </Button>*/}
            {/*    <Button variant={'contained'} color={'secondary'} onClick={onPause}>*/}
            {/*        Pause*/}
            {/*    </Button>*/}
            {/*</div>*/}
        </Block>
    );
};

export default Timer;
