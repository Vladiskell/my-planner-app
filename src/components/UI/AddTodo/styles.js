import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    addTodo: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0.5),
        margin: '16px 16px 8px 16px',
        backgroundColor: theme.palette.background.secondary.dark,
        border: theme.border.transparent,
        borderRadius: 4,
        transition: '.2s ease-in-out'
    },
    focusedForm: {
        backgroundColor: theme.palette.background.secondary.main,
        border: theme.border.dark,
    },
    input: {
        marginLeft: theme.spacing(1.5),
        flex: '1',
    },
    divider: {
        height: '28px',
        margin: theme.spacing(0.5),
    },
    button: {
        padding: theme.spacing(1),
        marginRight: 1,
    },
}));

