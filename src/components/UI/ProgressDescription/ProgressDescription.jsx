import React, { useMemo } from 'react'
import { useStyles } from './styles'
import { Typography } from '@material-ui/core'

// -------------------------------------------------------------------------------------------------
// component
const ProgressDescription = () => {
    const classes = useStyles()

    const lines = useMemo(() => {
        const data = [
            {
                text: 'In process',
                color: '#ff9800',
            },
            {
                text: 'Important',
                color: '#f45b68',
            },
            {
                text: 'Completed',
                color: '#1976d2',
            },
            {
                text: 'Active',
                color: '#4caf50',
            },
        ]
        return data
    })

    return (
        <div className={classes.progressDescription}>
            <div className={classes.lines}>
                {lines.map((item) => (
                    <div className={classes.line}>
                        <div className={classes.circle} style={{ backgroundColor: item.color }}></div>
                        <Typography variant={'body2'}>{item.text}</Typography>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProgressDescription
