import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { DataProvider } from './components/DataProvider';
//import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';
//import { Auth0Provider } from '@auth0/auth0-react';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import {BrowserRouter as Router} from 'react-router-dom';
//import { DataProvider } from './components/DataProvider';


//Redux-ing
import { createStore } from 'redux'
import rootReducer from './redux/reducer'
import { Provider } from 'react-redux'

const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    
    <App />
    
    </Provider>
  </React.StrictMode>
  
  
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
