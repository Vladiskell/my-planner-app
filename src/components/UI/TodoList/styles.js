import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    list: {
        height: '100%',
        marginTop: -8,
    },
    progress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
}));
