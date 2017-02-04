import React from 'react';
import {Route} from 'react-router';

import App from './containers/App';
import AppEnter from './containers/AppEnter';
import NotFoundPage from './components/notFoundPage/NotFoundPage';
import HelloPage from './components/notFoundPage/Hello';

export default function getRoutes() {
  return (
    <Route component={App}>
      {/*这里的AppEnter是为了在这之下的route中都做一次登录判断*/}
      <Route component={AppEnter}>
        <Route path="/" component={HelloPage}/>
      </Route>

      <Route path="404" component={NotFoundPage}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  );
}