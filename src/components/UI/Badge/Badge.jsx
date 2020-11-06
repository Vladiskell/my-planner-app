import React from 'react';
import { useStyles } from './styles';

// ---------------------------------------------------------------------------------------------------------------------
// component
const Badge = ({ title }) => {
    const classes = useStyles({ title });

    return (
        <div className={classes.badge}>
            <span>{title}</span>
        </div>
    );
};

export default Badge;
