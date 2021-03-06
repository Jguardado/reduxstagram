import React from 'react';

import { render } from 'react-dom';

//Import CSS
import css from './styles/style.styl';

import App from './components/app';
import Single from './components/single';
import Photogrid from './components/photogrid';

//import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

// import Raven from 'raven-js';
// import { sentry_url } from './data/config';
//
// Raven.config(sentry_url).install();
//
// console.log(window.does.nope);

const router = (
  <Provider store={store}>
    <Router histroy={ history}>
      <Route path="/" component={App}>
        <IndexRoute component={Photogrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
