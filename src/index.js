import React from 'react';
import { render } from 'react-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import './resources/index.css';
const store = configureStore();
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
//const persistor = persistStore(store);

render(
    <Provider store={store}>
        {/* <PersistGate
            loading={<div>Loading...</div>}
            persistor={persistor}> */}
        <Router>
            <div className="App">
                {/* <NavBar /> */}
                <Switch>
                    <Route path="" component={HomePage} exact />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </Router>
        {/* </PersistGate> */}
    </Provider>
    ,
    document.getElementById('root'),
);