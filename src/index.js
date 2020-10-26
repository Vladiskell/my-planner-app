import React from 'react';
import ReactDOM from 'react-dom';

import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App/App';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme/theme';

// -------------------------------------------------------------------------------------------------
// App
const app = (
    <Provider store={store}>
        <BrowserRouter>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
