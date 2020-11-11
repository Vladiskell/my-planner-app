import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    todo: {
        display: 'grid',
        gridTemplateRows: 'auto auto 1fr',
        alignItems: 'center',
        gridGap: 24,
        paddingTop: 8,
        overflow: 'hidden',
        height: '100%',
        overflowY: 'auto',

        '& > div:first-child p': {
            textTransform: 'capitalize',
        },
    },
}));
