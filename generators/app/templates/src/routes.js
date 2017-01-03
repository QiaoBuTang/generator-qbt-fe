import React from 'react';
import {Route} from 'react-router';

import App from './containers/App';
import NotFoundPage from './components/notFoundPage/NotFoundPage';
import HelloPage from './components/notFoundPage/Hello';

export default function getRoutes() {
  return (
    <Route component={App}>
      <Route path="/" component={HelloPage}/>

      <Route path="404" component={NotFoundPage}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  );
}
