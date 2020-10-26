import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';

import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import Block from '../../Layouts/Block/Block';

// -------------------------------------------------------------------------------------------------
// component
const Timer = () => {
    const classes = useStyles();
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const onStart = () => setIsActive(true);
    const onPause = () => setIsActive(false);
    const onReset = () => {
        setIsActive(false);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    };

    useEffect(() => {
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
    }, [isActive, seconds]);

    const time = `${hours < 10 ? 0 : ''}${hours}:${minutes < 10 ? 0 : ''}${minutes}:${seconds < 10 ? 0 : ''}${seconds}`;

    return (
        <Block isHeader={false} centerBody>
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
