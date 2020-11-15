import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    badge: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '13px',
        color: '#fff',
        borderRadius: '24px',
        lineHeight: '1.43',
        padding: '2px 14px',
        letterSpacing: '0.01071em',
        backgroundColor: (props) =>
            props.title === 'Important' || props.title === 'Deleted'
                ? '#f45b68'
                : props.title === 'In process'
                ? '#ff9800'
                : props.title === 'Changed'
                ? '#4caf50'
                : props.title === 'Added'
                ? '#8219d2'
                : '#1976d2',
    },
});
