import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
} from "react-router-dom";
import { Provider } from 'react-redux';

import './index.css';
import GlobalStyle from './globalStyles';
import App from './App';
import store from './store';
import Favicon from 'react-favicon';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyle />
      <Router>
        <Favicon url='https://res.cloudinary.com/mminhle771/image/upload/v1628731404/Videos_mmz5jz.ico' />
        <App />
      </Router>
    </React.StrictMode >
  </Provider>,
  document.getElementById('root')
);

