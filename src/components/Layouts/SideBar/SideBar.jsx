import React, { useMemo } from 'react'
import { useStyles } from './styles'

import { Typography } from '@material-ui/core'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted'
import CastForEducationIcon from '@material-ui/icons/CastForEducation'
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes'
import RateReviewIcon from '@material-ui/icons/RateReview'
import logo from '../../../assets/logo.svg'

import MenuItem from './MenuItem'

// -------------------------------------------------------------------------------------------------
// component
const SideBar = () => {
    const classes = useStyles()

    const menuItems = useMemo(() => {
        const data = [
            {
                path: '/',
                text: 'Education',
                icon: <CastForEducationIcon />,
            },
            {
                path: '/coding',
                text: 'Coding',
                icon: <FormatListBulletedIcon />,
            },
            {
                path: '/notes',
                text: 'Notes',
                icon: <SpeakerNotesIcon />,
            },
            {
                path: '/review',
                text: 'Review',
                icon: <RateReviewIcon />,
            },
        ]
        return data
    }, [])

    return (
        <aside className={classes.sideBar}>
            <div className={classes.logo}>
                <img src={logo} alt="" />
                <Typography variant="h6" component="span">
                    My Planner
                </Typography>
            </div>
            <div className={classes.title}>
                <Typography variant={'body2'} component={'span'}>
                    Pages
                </Typography>
            </div>
            <ul className={classes.menu}>
                {menuItems.map((item) => (
                    <MenuItem key={item.text} item={item} />
                ))}
            </ul>
        </aside>
    )
}

export default SideBar
