import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    sideBar: {
        height: '100vh',
        backgroundColor: theme.palette.background.primary.main,
        boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px' +
            ' 10px 0px rgba(0,0,0,0.12)',
        color: '#fff',
    },
    logo: {
        ...theme.headerStyles,
        padding: theme.spacing(2),
        height: '80px !important',

        '& > img': {
            maxWidth: 32,
            marginLeft: theme.spacing(1),
        },

        '& > span': {
            marginLeft: theme.spacing(1.5),
            lineHeight: '1 !important',
        },
    },
    title: {
        margin: '16px 24px 3px 24px',
        paddingBottom: '8px',

        '& span': {
            fontSize: '14px !important',
            lineHeight: '1.75',
            letterSpacing: '0.02857em',
            color: theme.palette.grey[300],
        },
    },
    menu: {
        padding: 0,
        margin: 0,
        listStyleType: 'none',

        '& a': {
            display: 'flex',
            alignItems: 'center',
            padding: '6px 24px',
            textDecoration: 'none',
            color: '#fff',

            '&:hover': {
                transition: '.2s ease-in-out',
            },

            '& > span': {
                fontSize: '15px !important',
                flexGrow: '1',
                lineHeight: '1.75',
                letterSpacing: '0.02857em',
                color: theme.palette.grey[300],
            },

            '& > svg': {
                marginRight: theme.spacing(2),
                fill: `${theme.palette.grey[600]} !important`,
                order: '-1',
                fontSize: '22px !important',
            },
        },
    },
    activePage: {
        backgroundColor: theme.palette.background.primary.dark,
    }
}));


