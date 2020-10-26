import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    progress: {
        display: 'flex',
        height: '100%',
        width: '100%',

        '& > div:first-child': {
            margin: -24,
        },
        '& > div:last-child': {
            marginLeft: 24,
        },
    },
}));
