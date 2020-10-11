import React from 'react';
import { render } from 'react-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import './resources/index.css';
const store = configureStore();
import App from './App';
//const persistor = persistStore(store);

render(
    <Provider store={store}>
        {/* <PersistGate
            loading={<div>Loading...</div>}
            persistor={persistor}> */}
        <App />
        {/* </PersistGate> */}
    </Provider>
    ,
    document.getElementById('root'),
);