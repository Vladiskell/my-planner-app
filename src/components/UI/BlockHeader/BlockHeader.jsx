import React from 'react';
import { useStyles } from './styles';
import { Typography } from '@material-ui/core'

// -------------------------------------------------------------------------------------------------
// component
const BlockHeader = ({title}) => {
    const classes = useStyles();

    return (
        <div className={classes.blockHeader}>
            <Typography variant={'body1'}>{title}</Typography>
        </div>
    )
}

export default BlockHeader;
