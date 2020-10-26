import React from 'react';
import { useStyles } from './styles';

// ---------------------------------------------------------------------------------------------------------------------
// component
const Badge = ({ title, color = 'primary' }) => {
    const classes = useStyles({ color });

    return (
        <div className={classes.badge}>
            <span>{title}</span>
        </div>
    );
};

export default Badge;
