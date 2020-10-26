import React from 'react';
import { useStyles } from './styles';

import { Typography } from '@material-ui/core';

import Block from '../../Layouts/Block/Block';

// -------------------------------------------------------------------------------------------------
// component
const Date = () => {
    const classes = useStyles();

    return (
        <Block isHeader={false} centerBody>
            <Typography className={classes.day} variant={'h4'}>
                Saturday,
            </Typography>
            <Typography className={classes.date} variant={'h6'}>
                24 October, 2020
            </Typography>
            <Typography className={classes.time} variant={'h3'}>
                14:15
            </Typography>
        </Block>
    );
};

export default Date;
