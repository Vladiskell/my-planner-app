import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    gridItem: {
        gridColumnStart: (props) => props.columnStart,
        gridColumnEnd: (props) => props.columnEnd,
        gridRowStart: (props) => props.rowStart,
        gridRowEnd: (props) => props.rowEnd,
    }
});

