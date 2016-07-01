import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import rootReducer

import rootReducer from './reducers/index.js';
import comments from './data/comments';
import posts from './data/posts';

// create an object fro teh default data
const defaultState = {
  posts: posts,
  comments: comments,
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
