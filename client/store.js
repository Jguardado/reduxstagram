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

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;