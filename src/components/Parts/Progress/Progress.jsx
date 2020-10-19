import React from 'react'
import { useStyles } from './styles'

import Paper from '@material-ui/core/Paper'

import ProgressChart from '../../UI/ProgressChart/ProgressChart'
import ProgressDescription from '../../UI/ProgressDescription/ProgressDescription'

// -------------------------------------------------------------------------------------------------
// component
const Progress = () => {
    const classes = useStyles()

    return (
        <Paper className={classes.progress}>
            <ProgressChart />
            <ProgressDescription />
        </Paper>
    )
}

export default Progress
