import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    badge: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '13px',
        color: '#fff',
        borderRadius: '24px',
        lineHeight: '1.43',
        padding: '2px 14px',
        letterSpacing: '0.01071em',
        backgroundColor: (props) =>
            props.color === 'secondary' ? '#f45b68' : props.color === 'warning' ? '#ff9800' : '#1976d2',
    },
});
