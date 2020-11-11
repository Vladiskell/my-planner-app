import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    inner: {
        maxHeight: 'calc(100% - 66px)',
        margin: '0 -24px',
    },
    reportItem: {
        position: 'relative',
        fontSize: 15,
        padding: '4px 32px 4px 24px',
        cursor: 'pointer',
        transition: '0.2s ease-in-out',

        '& > span': {
            fontWeight: 'bold',
        },

        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.07)',

            '& > button': {
                opacity: '1',
            },
        },
    },
    button: {
        position: 'absolute',
        top: '50%',
        right: '0',
        transform: 'translateY(-50%)',
        transition: '0.2s ease-in-out',
        opacity: '0',
    },
}));
