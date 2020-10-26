import React from 'react';
import { useStyles } from './styles.js';
import { NavLink } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setCurrentCategory, todoFilter } from '../../../redux/todos/actions/actions';

// -------------------------------------------------------------------------------------------------
// component
const MenuItem = ({ item }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(setCurrentCategory(item.id));
        dispatch(todoFilter('All'));
    };

    return (
        <li>
            <NavLink to={item.path} activeClassName={classes.activePage} exact onClick={onClick}>
                <Typography variant="h6" component="span">
                    {item.text}
                </Typography>
                {item.icon}
            </NavLink>
        </li>
    );
};

export default MenuItem;
