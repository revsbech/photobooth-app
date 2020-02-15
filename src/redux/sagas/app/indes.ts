import {put, takeLatest} from "redux-saga/effects";
import {GenericAction} from "dense-redux-actions";
import {FETCH_IMAGES_REQUEST, SET_DATE} from "../../actions";

function* fetchImages(action: GenericAction) {
  yield put(FETCH_IMAGES_REQUEST.create({}));
}

export function* appSaga() {
  yield takeLatest(SET_DATE.type, fetchImages);
}
