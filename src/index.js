import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  HashRouter as Router
} from "react-router-dom";
import App from './App';
import GlobalStyle from './globalStyles';
import './index.css';
import store from './store';


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyle />
      <Router>
        <App />
      </Router>
    </React.StrictMode >
  </Provider>,
  document.getElementById('root')
);

