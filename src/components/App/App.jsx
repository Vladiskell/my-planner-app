import React from 'react';
import { useStyles } from './styles';
import { Route, Switch } from 'react-router-dom';

import SideBar from '../Parts/SideBar/SideBar';
import { CodingPage } from '../Pages/CodingPage/CodingPage';
import { EducationPage } from '../Pages/EducationPage/EducationPage';
import { ReviewPage } from '../Pages/ReviewPage/ReviewPage';
import { NotesPage } from '../Pages/NotesPage/NotesPage';

// -------------------------------------------------------------------------------------------------
// component
const App = () => {
    const classes = useStyles();

    return (
        <div className={classes.app}>
            <SideBar />
            <main>
                <Switch>
                    <Route exact path="/" component={CodingPage} />
                    <Route path="/education" component={EducationPage} />
                    <Route path="/review" component={ReviewPage} />
                    <Route path="/notes" component={NotesPage} />
                </Switch>
            </main>
        </div>
    );
};

export default App;
