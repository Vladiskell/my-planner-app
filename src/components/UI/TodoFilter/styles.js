import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    filter: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridGap: theme.spacing(1),
        // paddingBottom: 0,
    },
}));
