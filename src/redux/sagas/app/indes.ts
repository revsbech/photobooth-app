import {put, takeLatest, delay, spawn, takeEvery} from "redux-saga/effects";
import {GenericAction} from "dense-redux-actions";
import { FETCH_IMAGES_REQUEST, SET_DATE, SHOW_TOAST } from '../../actions';
import Toast from 'react-native-simple-toast';

function* fetchImages(action: GenericAction) {
  yield put(FETCH_IMAGES_REQUEST.create({}));
}
export function* periodSyncData() {
  while (true) {
    yield put(FETCH_IMAGES_REQUEST.create({}));
    yield delay(20000); // Fetch new images every 20 seconds
  }
}

function* showToast(action: GenericAction) {
  //const payload = SENDSMS_REQUEST.payload(action);
  const payload = SHOW_TOAST.payload(action);
  Toast.show(payload.text);
}

export function* appSaga() {
  yield takeLatest(SET_DATE.type, fetchImages);
  yield takeEvery(SHOW_TOAST.type, showToast);
  yield spawn(periodSyncData);
}
