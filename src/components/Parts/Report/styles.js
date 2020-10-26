import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    inner: {
        '& > *': {
            marginBottom: theme.spacing(1),
            fontSize: 15,
        },
    },
}));
