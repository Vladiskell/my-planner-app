import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    searchField: {
        color: '#fff',
    },
    form: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0.5),
        backgroundColor: `${theme.palette.background.secondary.dark} !important`,
        border: theme.border.dark,
        boxShadow: 'none !important',
        width: 580,
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
}))

