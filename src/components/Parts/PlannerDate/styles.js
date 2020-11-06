import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    day: {
        color: theme.palette.secondary.main,
    },

    date: {
        marginBottom: theme.spacing(1),
    },

    time: {
        color: theme.palette.primary.main,
    },
}));
