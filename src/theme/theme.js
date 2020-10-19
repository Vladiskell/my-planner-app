import { createMuiTheme } from '@material-ui/core/styles'

const headerStyles = () => ({
    display: 'flex',
    alignItems: 'center',
    height: 64,
    padding: 16,
    backgroundColor: '#232f3e',
    boxShadow:
        'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, ' +
        'rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,' +
        ' rgba(0, 0, 0, 0.12) 0px 1px 5px 0px',
    color: '#fff',
    borderRadius: '4px 4px 0 0',
})

const mainGridLayoutStyles = (columnsSetting, rowSettings) => ({
    display: 'grid',
    gridTemplateColumns: columnsSetting,
    gridTemplateRows: rowSettings,
    gridGap: '24px',
    padding: '24px',
    maxHeight: '100vh',
    height: '100vh',
    overflow: 'hidden',
})

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#f45b68',
        },
        custom: {
            important: '#f4433640',
            success: '#4caf5059',
            process: '#ff9800',
        },
        background: {
            body: '#f0f2f5',
            primary: {
                dark: '#121820',
                main: '#1b2430',
                light: '#232f3e',
            },
            secondary: {
                dark: '#e0e8f5',
                main: '#f3f6fb',
                light: '#fff',
            },
        },
    },
    border: {
        dark: '1px solid rgba(0, 0, 0, 0.1) !important',
        light: '1px solid rgba(255, 255, 255, 0.1) !important',
        primary: `1px solid #1976d2`,
        secondary: '1px solid #f45b68',
        transparent: '1px solid transparent',
    },
    headerStyles: headerStyles(),
    mainGridLayoutStyles: (columnsSetting, rowSettings) => mainGridLayoutStyles(columnsSetting, rowSettings),
})
