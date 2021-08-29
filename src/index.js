import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import rootReducer from './reducers/index';

const preloadState = {
  books: [
    {
      id: Math.random().toString(),
      title: 'Billy Summers',
      category: 'Action',
    },
    {
      id: Math.random().toString(),
      title: 'Steve Jobs',
      category: 'Biography',
    },
    {
      id: Math.random().toString(),
      title: 'Where the Wild Things are',
      category: 'Kids',
    },
    {
      id: Math.random().toString(),
      title: '1984',
      category: 'Sci-Fi',
    },
    {
      id: Math.random().toString(),
      title: '1776',
      category: 'History',
    },
    {
      id: Math.random().toString(),
      title: 'The Bad Seed',
      category: 'Horror',
    },
    {
      id: Math.random().toString(),
      title: 'Mastery',
      category: 'Learning',
    },
  ],
};
const store = createStore(rootReducer, preloadState);

console.log(store);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
