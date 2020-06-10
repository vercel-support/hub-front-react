import "regenerator-runtime/runtime";
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import sagaCart from './pages/Cart/sagas'
import logger from 'redux-logger'
import reducer from './reducer'
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(sagaCart);

render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('app'));
