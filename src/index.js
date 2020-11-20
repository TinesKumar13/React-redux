import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import { allReducers } from './reducers';
import { Provider } from 'react-redux';



//Store = that actually holds our state
const store = createStore(allReducers , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//Actions = pure javascript function that returns objects which indicate the reducers to carry out their  funcitons
//Reducers = javascript function that holds the logic for carrying out state updates



ReactDOM.render(

    <Provider store={store}>
         <App/>
    </Provider>
           ,

    document.getElementById('root')
)