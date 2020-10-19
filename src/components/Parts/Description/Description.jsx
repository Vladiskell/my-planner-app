import React from 'react';
import { useStyles } from './styles';
import Paper from '@material-ui/core/Paper'
import BlockHeader from '../../UI/BlockHeader/BlockHeader'

// -------------------------------------------------------------------------------------------------
// component
const Description = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.description}>
            {/*<BlockHeader title={'Description'} />*/}
            <h1>Some block</h1>
        </Paper>
    )
}

export default Description;
