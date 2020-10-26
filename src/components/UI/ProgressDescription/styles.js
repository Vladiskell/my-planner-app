import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    progressDescription: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
    },
    lines: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

        '& h6': {
            marginBottom: theme.spacing(1),
        },
    },
    line: {
        display: 'flex',
        alignItems: 'center',
        padding: '4px 0',
    },
    circle: {
        width: 8,
        height: 8,
        marginRight: theme.spacing(2),
        borderRadius: '50%',
    },
}));
