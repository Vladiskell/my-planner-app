import React from 'react';
import { useStyles } from './styles';

import Block from '../../Layouts/Block/Block';
import { Typography } from "@material-ui/core";

// ---------------------------------------------------------------------------------------------------------------------
const PlannerDate = () => {
    const classes = useStyles();

    return (
        <Block isHeader={false} centerBody>
            <Typography variant={'h4'}>Some block</Typography>

            {/*<Typography className={classes.day} variant={'h4'}>*/}
            {/*    Friday,*/}
            {/*</Typography>*/}
            {/*<Typography className={classes.date} variant={'h6'}>*/}
            {/*    30 October, 2020*/}
            {/*</Typography>*/}
            {/*<Typography className={classes.time} variant={'h3'}>*/}
            {/*    {15}:{20}*/}
            {/*</Typography>*/}
        </Block>
    );
};

export default PlannerDate;
