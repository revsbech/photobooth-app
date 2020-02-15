import {all} from 'redux-saga/effects'
import {navigationSaga} from "./navigation";
import {apiSaga} from "./api";
import {appSaga} from "./app/indes";

function* rootSaga() {
  yield all([
    navigationSaga(),
    apiSaga(),
    appSaga(),
  ]);
}
export default rootSaga;