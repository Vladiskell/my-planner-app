import React from 'react';
import ReactDOM from 'react-dom';

import store from "./redux/store/store";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App/App'

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme/theme'

// -------------------------------------------------------------------------------------------------
// App
const app = (
    <BrowserRouter>
        <Provider store={store}>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Provider>
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
