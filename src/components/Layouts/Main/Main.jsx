import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { EducationPage } from '../../Pages/EducationPage/EducationPage'
import { CodingPage } from '../../Pages/CodingPage/CodingPage'
import { NotesPage } from '../../Pages/NotesPage/NotesPage'

// -------------------------------------------------------------------------------------------------
// component
const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={EducationPage} />
                <Route path="/coding" component={CodingPage} />
                <Route path="/notes" component={NotesPage} />
            </Switch>
        </main>
    )
};

export default Main;
