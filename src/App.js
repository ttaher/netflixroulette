import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';
import {
    BrowserRouter,
    Route, NavLink, Redirect, Switch, hashHistory
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => (
    <BrowserRouter>
        <div className="App">
            {/* <NavBar /> */}
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/movie/:id" component={MoviePage} exact />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default hot(module)(App);