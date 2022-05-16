import React, {lazy,Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import AuntContainer from './app/AuntContainer';
import "./i8next"
ReactDOM.render(
    <Provider store={store}>
      <Suspense fallback={<div>loading . . .</div>}>
        <AuntContainer />
      </Suspense>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
