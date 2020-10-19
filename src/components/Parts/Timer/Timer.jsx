import React from 'react';
import { useStyles } from './styles';
import Paper from '@material-ui/core/Paper'
import BlockHeader from '../../UI/BlockHeader/BlockHeader'

// -------------------------------------------------------------------------------------------------
// component
const Timer = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.timer}>
            <BlockHeader title={'Some block'} />
        </Paper>
    )
}

export default Timer;
