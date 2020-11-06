import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import * as API from '../../../api/todosApi';

import { useDispatch, useSelector } from 'react-redux';
import { currentTodoGet, inProcessTodoGet } from '../../../redux/todos/selectors/selectors';
import { setTimesheetStatus } from '../../../redux/todos/actions/actions';

import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import Block from '../../Layouts/Block/Block';

// ---------------------------------------------------------------------------------------------------------------------
// component
const Timer = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const inProcessTodo = useSelector(inProcessTodoGet);

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [isActive, setIsActive] = useState((inProcessTodo && inProcessTodo.timesheet.status) || false);

    const onStart = async () => {
        await API.updateTodo('coding', inProcessTodo.id, 'timer', true);
        setIsActive(true);
        dispatch(setTimesheetStatus(inProcessTodo.id));
    };

    const onPause = async () => {
        await API.updateTodo('coding', inProcessTodo.id, 'timer', false);
        setIsActive(false);
        dispatch(setTimesheetStatus(inProcessTodo.id));
    };

    const onReset = async () => {
        await API.updateTodo('coding', inProcessTodo.id, 'timer', false);
        setIsActive(false);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
        dispatch(setTimesheetStatus(inProcessTodo.id));
    };

    useEffect(() => {
        setIsActive(inProcessTodo && inProcessTodo.timesheet.status);

        let internal = null;
        if (isActive) {
            internal = setInterval(() => {
                if (seconds < 59) {
                    setSeconds((prevState) => prevState + 1);
                } else {
                    if (minutes < 59) {
                        setMinutes((prevState) => prevState + 1);
                    } else {
                        if (hours < 23) {
                            setHours((prevState) => prevState + 1);
                        } else {
                            setHours(0);
                        }
                        setMinutes(0);
                    }
                    setSeconds(0);
                }
            }, 1000);
        } else if (!isActive) {
            clearInterval(internal);
        }
        return () => clearInterval(internal);
    }, [isActive, seconds, inProcessTodo && inProcessTodo.statuses.process]);

    const time = `${hours < 10 ? 0 : ''}${hours}:${minutes < 10 ? 0 : ''}${minutes}:${seconds < 10 ? 0 : ''}${seconds}`;

    return (
        <Block isHeader={false} centerBody>
            <Typography variant={'h6'} component={'span'} gutterBottom>
                {inProcessTodo && inProcessTodo.title}
            </Typography>
            <Typography variant={'h3'} component={'span'}>
                {time}
            </Typography>
            <div className={classes.controls}>
                <Button variant={'contained'} onClick={onReset}>
                    Reset
                </Button>
                <Button variant={'contained'} color={'primary'} onClick={onStart}>
                    Start
                </Button>
                <Button variant={'contained'} color={'secondary'} onClick={onPause}>
                    Pause
                </Button>
            </div>
        </Block>
    );
};

export default Timer;
