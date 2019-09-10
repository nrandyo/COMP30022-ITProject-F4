import 'semantic-ui-css/semantic.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import App from './components/App';
import reducers from './reducers';



const store = createStore(reducers, {}, applyMiddleware());



// Porvider component to allow different parts of the application 
// to retrieve state change information from the redux store
ReactDOM.render(
    <Provider store = {store}><App /></Provider>,
    document.querySelector('#root')
    );


