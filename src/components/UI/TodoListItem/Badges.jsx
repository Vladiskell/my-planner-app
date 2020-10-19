import React from 'react'
import { useStyles } from './styles'
import Button from '@material-ui/core/Button'
import classnames from 'classnames'

// -------------------------------------------------------------------------------------------------
// component
const Badges = ({ isImportant, isProcess }) => {
    const classes = useStyles()

    return (
        <React.Fragment>
            { isImportant && (
                <Button
                    variant={isImportant ? 'contained' : 'contained'}
                    color={isImportant ? 'secondary' : 'default'}
                    className={classes.chipButton}
                    disableElevation
                >
                    Important
                </Button>
            ) }
            { isProcess && (
                <Button
                    variant='contained'
                    className={classnames(classes.chipButton, classes.processButton)}
                    disableElevation
                >
                    In process
                </Button>
            ) }
        </React.Fragment>
    )
}

export default Badges;
