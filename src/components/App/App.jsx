import React from 'react';
import { useStyles } from './styles';

import AppBar from '../Layouts/AppBar/AppBar'
import SideBar from '../Layouts/SideBar/SideBar'
import Main from '../Layouts/Main/Main'

// -------------------------------------------------------------------------------------------------
// component
const App = () => {
    const classes = useStyles();

    return (
        <div className={classes.app}>
            {/*<AppBar />*/}
            <SideBar />
            <Main />
        </div>
    );
};

export default App;

