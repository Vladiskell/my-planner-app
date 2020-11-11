import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    gridContainer: {
        ...theme.mainGridLayoutStyles('1.3fr 1fr 1fr', '40% 30% 20%'),
    },
}));
