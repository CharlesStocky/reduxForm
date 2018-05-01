import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App.js';
import { reducer as reduxFormReducer, reduxForm } from 'redux-form';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const reducer = combineReducers({
  form: reduxFormReducer
})
let store = createStore(reduxForm);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
