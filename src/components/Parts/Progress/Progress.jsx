import React from 'react';
import { useStyles } from './styles';

import Paper from '@material-ui/core/Paper';

import ProgressChart from '../../UI/ProgressChart/ProgressChart';
import ProgressDescription from '../../UI/ProgressDescription/ProgressDescription';
import Block from '../../Layouts/Block/Block';

// -------------------------------------------------------------------------------------------------
// component
const Progress = () => {
    const classes = useStyles();

    return (
        <Block isHeader={false} centerBody>
            <div className={classes.progress}>
                <ProgressChart />
                <ProgressDescription />
            </div>
        </Block>
    );
};

export default Progress;
