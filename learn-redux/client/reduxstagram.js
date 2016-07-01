import React from 'react';

import { render } from 'react-dom';

//Import CSS
import css from './styles/style.styl';

import Main from './components/main';
import Single from './components/single';
import Photogrid from './components/photogrid';

//import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Router histroy={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Photogrid}></IndexRoute>
      <Route path="/view/:postId" component={Single}></Route>
    </Route>
  </Router>
);

render(router, document.getElementById('root'));
