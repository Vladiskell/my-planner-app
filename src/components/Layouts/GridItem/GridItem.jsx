import React from 'react';
import { useStyles } from './styles';

// -------------------------------------------------------------------------------------------------
// component
const GridItem = ({ columnStart, columnEnd, rowStart, rowEnd, children }) => {
    const props = { columnStart, columnEnd, rowStart, rowEnd };
    const classes = useStyles(props);

    return (
        <div className={classes.gridItem}>
            { children }
        </div>
    )
}

export default GridItem;
