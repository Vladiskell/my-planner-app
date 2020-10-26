import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    block: {
        height: '100%',
    },
    header: {
        ...theme.headerStyles,
        // textTransform: 'capitalize',
    },
    body: {
        padding: '16px 24px',
    },
    withoutHeader: {
        padding: '24px !important',
        height: '100%',
    },
    centerBody: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));
