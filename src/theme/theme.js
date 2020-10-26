import { createMuiTheme } from '@material-ui/core/styles';

const headerStyles = () => ({
    display: 'flex',
    alignItems: 'center',
    height: 50,
    minHeight: 50,
    padding: '0 24px',
    backgroundColor: '#232f3e',
    borderRadius: '4px 4px 0 0',
    color: '#fff',
});

const mainGridLayoutStyles = (columnsSetting, rowSettings) => ({
    display: 'grid',
    gridTemplateColumns: columnsSetting,
    gridTemplateRows: rowSettings,
    gridGap: 32,
    padding: 32,
    maxHeight: '100vh',
    height: '100vh',
    overflow: 'hidden',
});

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#f45b68',
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
    overrides: {
        MuiButton: {
            root: {
                whiteSpace: 'nowrap',
                boxShadow: 'none !important',
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
});
