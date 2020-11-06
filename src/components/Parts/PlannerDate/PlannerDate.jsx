import React from 'react';
import { useStyles } from './styles';

import { Typography } from '@material-ui/core';

import Block from '../../Layouts/Block/Block';

// ---------------------------------------------------------------------------------------------------------------------
// component
const PlannerDate = () => {
    const classes = useStyles();

    return (
        <Block isHeader={false} centerBody>
            <Typography className={classes.day} variant={'h4'}>
                Friday,
            </Typography>
            <Typography className={classes.date} variant={'h6'}>
                30 October, 2020
            </Typography>
            <Typography className={classes.time} variant={'h3'}>
                {15}:{20}
            </Typography>
        </Block>
    );
};

export default PlannerDate;
