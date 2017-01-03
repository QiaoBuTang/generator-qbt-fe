import {observable, toJS} from 'mobx';
import mergeObservables from './helpers/mergeObservables';
import menuState from './states/menu';

const defaultState = observable({
  menu: menuState
});

export const createServerState = () => toJS(defaultState);

export const createClientState = () => mergeObservables(defaultState, window.__INITIAL_STATE__);

