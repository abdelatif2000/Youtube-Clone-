import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import store from "./redux/store";

ReactDOM.render(
 <Provider store={store}>
     <App />
 </Provider>
   ,
    document.getElementById('root')
);

//composeWithDevTools is for show the redux-tools
//thunk for  apply the fuuntion enter the action outomatecty and ather things
