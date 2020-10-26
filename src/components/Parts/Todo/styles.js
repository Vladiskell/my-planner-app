import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    todo: {
        display: 'grid',
        gridGap: 24,
        paddingTop: 8,
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
        maxHeight: '100%',
        overflowY: 'auto',

        '& > div:first-child p': {
            textTransform: 'capitalize',
        },
    },
}));
