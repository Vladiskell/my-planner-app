import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    filter: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: theme.spacing(1),
        padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
        paddingBottom: 0,
    },
}));
