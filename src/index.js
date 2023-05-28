import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { history } from 'redux/reducers';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

window.chart = {
  chartDay: null,
  chartWeek: null,
  chartMonth: null,
  chartTemp: null,
  chartPress: null,
};

root.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
