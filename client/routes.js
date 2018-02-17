import React from 'react';
import { Route, IndexRoute } from 'react-router-dom';
import App from './containers/App';
import NotFound from './components/NotFound';
import Landing from './components/Landing';

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Landing} />
      <Route path="*" component={NotFound} />
    </Route>
  </Route>
);
