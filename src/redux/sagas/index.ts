import {all} from 'redux-saga/effects'
import {navigationSaga} from "./navigation";

function* rootSaga() {
  yield all([
    navigationSaga()
  ]);
}
export default rootSaga;