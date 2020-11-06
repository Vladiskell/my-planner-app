import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    block: {
        height: '100%',
    },
    header: {
        ...theme.headerStyles,
    },
    body: {
        padding: '16px 24px',
        maxHeight: 'calc(100% - 66px)',
        overflowX: 'hidden',
        overflowY: 'auto',
    },
    withoutHeader: {
        padding: '24px !important',
        height: '100%',
        maxHeight: '100% !important',
    },
    centerBody: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));
