import {combineReducers} from 'redux';

import app, {AppState} from './app';

export interface GlobalState {
  app: AppState;
}

export default combineReducers({
  app,
});
