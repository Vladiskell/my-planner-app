import React from 'react'
import { useStyles } from './styles.js'
import { NavLink } from 'react-router-dom'
import { Typography } from '@material-ui/core'

// -------------------------------------------------------------------------------------------------
// component
const MenuItem = ({ item }) => {
    const classes = useStyles();

    return (
        <li>
            <NavLink to={item.path} activeClassName={classes.activePage} exact>
                <Typography variant="h6" component="span">{item.text}</Typography>
                {item.icon}
            </NavLink>
        </li>
    )
}

export default MenuItem
