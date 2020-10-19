import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    appBar: {
        display: 'flex',
        gridColumnStart: 1,
        gridColumnEnd: 3,
        backgroundColor: '#fff',
        color: '#fff',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px,' +
            ' rgba(0, 0, 0, 0.12) 0px 1px 8px 0px',
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: theme.palette.background.primary.light,
        width: 270,
        padding: theme.spacing(2),

        '& > img': {
            maxWidth: 30,
            marginLeft: theme.spacing(0.5),
        },

        '& > span': {
            marginLeft: theme.spacing(2),
        },
    },
    panel: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 32px',
    }
}))

