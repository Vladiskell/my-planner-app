import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    inner: {
        maxHeight: 'calc(100% - 66px)',
    },
    reportItem: {
        marginBottom: theme.spacing(1.3),
        fontSize: 15,

        '& > span': {
            fontWeight: 'bold',
        },
    },
}));
