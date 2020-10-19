import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    todo: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        // minHeight: 'calc(100% / 3 * 2 - 24px)',
        height: '100%',
        maxHeight: '100%',
        overflowY: 'auto',
    }
}))

