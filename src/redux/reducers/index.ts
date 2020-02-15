import {combineReducers} from 'redux';

import app, {AppState} from './app';
import api, {ApiState} from "./api";

export interface GlobalState {
  app: AppState;
  api: ApiState;
}

export default combineReducers({
  app, api
});
