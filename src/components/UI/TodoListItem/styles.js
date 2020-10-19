import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    item: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        borderRadius: theme.spacing(0.5),
        padding: '8px 4px 8px 4px !important',
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
    text: {
        flexGrow: '1',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(2),
        cursor: 'pointer',
    },
    label: {
        margin: '0 !important',
    },
    iconButton: {
        padding: '8px !important',
    },
    editField: {
        display: 'flex',
        alignItems: 'center',
        padding: '2px 4px',
        borderRadius: 4,
        backgroundColor: theme.palette.background.secondary.dark,
        height: 59,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        padding: '4px 0',
    },
    chipButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: '0',
        fontSize: '13px !important',
        borderRadius: '24px !important',
        textTransform: 'none',
        lineHeight: '1.43 !important',
        padding: '2px 14px !important',
        fontWeight: '400 !important',
        letterSpacing: '0.01071em !important',
        pointerEvents: 'none',

        '&:not(:last-child)': {
            marginRight: '8px',
        },
    },
    processButton: {
        backgroundColor: `${theme.palette.custom.process} !important`,
        color: '#fff !important',
    },
    menuItem: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1.5),
        paddingRight: theme.spacing(0.5),
        minWidth: 170,
    },
    listItemIcon: {
        minWidth: '28px !important',
    },
    menuIcon: {
        fontSize: '18px !important',
    },
    switch: {
        marginLeft: 'auto',
    },
}))
