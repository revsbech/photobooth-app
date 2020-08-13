import {put, takeLatest, delay, spawn} from "redux-saga/effects";
import {GenericAction} from "dense-redux-actions";
import {FETCH_IMAGES_REQUEST, SET_DATE} from "../../actions";

function* fetchImages(action: GenericAction) {
  yield put(FETCH_IMAGES_REQUEST.create({}));
}
export function* periodSyncData() {
  while (true) {
    yield put(FETCH_IMAGES_REQUEST.create({}));
    yield delay(20000); // Fetch new images every 20 seconds
  }
}
export function* appSaga() {
  yield takeLatest(SET_DATE.type, fetchImages);
  yield spawn(periodSyncData);
}
