import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    item: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        borderRadius: theme.spacing(0.5),
        padding: '6px 4px 6px 4px !important',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1) !important',
    },
    completed: {
        '& > p': {
            textDecoration: 'line-through',
            color: `${theme.palette.grey[500]} !important`,
        },
    },
    divider: {
        height: 28,
        margin: theme.spacing(0.5),
    },
    title: {
        flexGrow: '1',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(2),
        cursor: 'pointer',
        // fontSize: '15px !important',
    },
    label: {
        margin: '0 !important',
    },
    badges: {
        display: 'flex',
        alignItems: 'center',
        flexShrink: 0,

        // '&> div:not(:last-child)': {
        //     marginRight: '8px',
        // },
        '&> div': {
            marginRight: '8px',
        },
    },
}));
