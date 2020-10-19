import React from 'react';
import { useStyles } from './styles';
import Paper from '@material-ui/core/Paper'
import BlockHeader from '../../UI/BlockHeader/BlockHeader'

// -------------------------------------------------------------------------------------------------
// component
const Report = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.report}>
            <BlockHeader title={'Report'} />
        </Paper>
    )
}

export default Report;
