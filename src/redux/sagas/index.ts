import {all} from 'redux-saga/effects'
import {navigationSaga} from "./navigation";
import {apiSaga} from "./api";

function* rootSaga() {
  yield all([
    navigationSaga(),
    apiSaga(),
  ]);
}
export default rootSaga;