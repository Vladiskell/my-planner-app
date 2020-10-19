import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    list: {
        padding: theme.spacing(2),
        height: '100%',
    },
    progress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    }
}))

