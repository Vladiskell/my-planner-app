import React, { useMemo } from 'react';
import { useStyles } from './styles';
import { useDispatch } from 'react-redux';
import logo from '../../../assets/logo.svg';

import { NavLink } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import RateReviewIcon from '@material-ui/icons/RateReview';

import { setCategoryAction } from '../../../redux/category/actions';

// ---------------------------------------------------------------------------------------------------------------------
const SideBar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const menuItems = useMemo(() => {
        const data = [
            {
                id: 'coding',
                path: '/',
                text: 'Coding',
                icon: <FormatListBulletedIcon />,
            },
            {
                id: 'education',
                path: '/education',
                text: 'Education',
                icon: <CastForEducationIcon />,
            },
            {
                id: 'notes',
                path: '/notes',
                text: 'Notes',
                icon: <SpeakerNotesIcon />,
            },
            {
                id: 'review',
                path: '/review',
                text: 'Review',
                icon: <RateReviewIcon />,
            },
        ];
        return data;
    }, []);

    return (
        <aside className={classes.sideBar}>
            <div className={classes.logo}>
                <img src={logo} alt="" />
                <Typography variant="h6">My Planner</Typography>
            </div>
            <div className={classes.title}>
                <Typography variant={'body2'}>Pages</Typography>
            </div>
            <ul className={classes.menu}>
                {menuItems.map((item) => (
                    <li key={item.text}>
                        <NavLink
                            exact
                            to={item.path}
                            activeClassName={classes.activePage}
                            onClick={() => dispatch(setCategoryAction(item.id))}
                        >
                            <Typography component="span">{item.text}</Typography>
                            {item.icon}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default SideBar;
