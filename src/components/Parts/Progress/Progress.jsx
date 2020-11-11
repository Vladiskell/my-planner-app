import React from 'react';
import { useStyles } from './styles';

import ProgressChart from '../../UI/ProgressChart/ProgressChart';
import ProgressDescription from '../../UI/ProgressDescription/ProgressDescription';
import Block from '../../Layouts/Block/Block';

// ---------------------------------------------------------------------------------------------------------------------
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
