import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    editForm: {
        display: 'flex',
        alignItems: 'center',
        padding: '2px 4px',
        borderRadius: 4,
        backgroundColor: theme.palette.background.secondary.dark,
        height: 59,
    },
    focusedForm: {
        backgroundColor: theme.palette.background.secondary.main,
        border: theme.border.dark,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        padding: '4px 0',
    },
    divider: {
        height: '75%',
    },
}));
