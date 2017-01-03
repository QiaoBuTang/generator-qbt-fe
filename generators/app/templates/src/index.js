import React from 'react';
import {render} from 'react-dom';
import {browserHistory} from 'react-router';
import Root from './containers/Root';
import getRoutes from './routes';
import './styles/main.scss';
import {createClientState} from './states';

let states = createClientState();

let ignoreFirstLoad = true;
function onRouterUpdate() {
  if (ignoreFirstLoad && window.__INITIAL_STATE__) {
    ignoreFirstLoad = false;
    return;
  }
  // Page changed, executing onEnter
  let params = this.state.params;
  let query = this.state.location.query;
  let pathname = this.state.location.pathname.slice(1);
  this.state.components.filter(c => c.onEnter).forEach(c => {
    c.onEnter({states, query, params, pathname});
  });
}

render(<Root states={states} onUpdate={onRouterUpdate} history={browserHistory}
             routes={getRoutes()}/>, document.getElementById('app'));
