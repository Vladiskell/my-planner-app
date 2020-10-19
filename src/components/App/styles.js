import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    app: {
        display: 'grid',
        gridTemplateColumns: '270px 1fr',
        backgroundColor: theme.palette.background.body,
    }
}))

