import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import rootReducer from './reducers/index';
import { createBook } from './actions/index';
import './styles.css';

const store = createStore(rootReducer);

store.dispatch(createBook({
  title: 'Mastery',
  category: 'Learning',
}));

store.dispatch(createBook({
  title: 'The Bad Seed',
  category: 'Horror',
}));

store.dispatch(createBook({
  title: '1776',
  category: 'History',
}));

store.dispatch(createBook({
  title: '1984',
  category: 'Sci-Fi',
}));
store.dispatch(createBook({
  title: 'Where the Wild Things are',
  category: 'Kids',
}));
store.dispatch(createBook({
  title: 'Steve Jobs',
  category: 'Biography',
}));

store.dispatch(createBook({
  title: 'Billy Summers',
  category: 'Action',
}));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
