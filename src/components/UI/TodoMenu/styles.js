import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    todoMenu: {
        // marginRight: -8,
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
    iconButton: {
        padding: '8px !important',
    },
}));
