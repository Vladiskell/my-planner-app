import React from 'react';
import { useStyles } from './styles';
import Paper from '@material-ui/core/Paper'
import BlockHeader from '../../UI/BlockHeader/BlockHeader'

// -------------------------------------------------------------------------------------------------
// component
const Progress = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.progress}>
            {/*<BlockHeader title={'Progress'} />*/}
            <h1>Some block</h1>
        </Paper>
    )
}

export default Progress;
