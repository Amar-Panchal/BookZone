import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './Buyer/Redux/Store'
import { Provider } from 'react-redux';

ReactDOM.render(
  <BrowserRouter>
  <Provider store ={store}>
    <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

