import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    timer: {
        height: '100%',
    },
    inner: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    controls: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 80px)',
        gridGap: 16,
        marginTop: theme.spacing(2),
    },
}));
