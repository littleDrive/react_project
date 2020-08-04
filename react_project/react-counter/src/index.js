import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './redux/reduces/index'
import CounterGroupApp from './contains/counterContain'
import * as serviceWorker from './serviceWorker';

const store = createStore(reducers)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CounterGroupApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
