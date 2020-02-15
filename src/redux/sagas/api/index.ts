import {put, takeLatest} from "redux-saga/effects";
import {GenericAction} from "dense-redux-actions";
import {FETCH_IMAGES_FAIL, FETCH_IMAGES_REQUEST, FETCH_IMAGES_SUCCESS} from "../../actions";
import PhotoboothApi from "../../../api/client";

let client = new PhotoboothApi()

export function* fetchImages(action: GenericAction) {
  try {
    const images = yield client.getImages("2020", "02", "13")
    yield put(FETCH_IMAGES_SUCCESS.create({images}));
  } catch (e) {
    yield put(FETCH_IMAGES_FAIL.create({message: e.message}));
  }
}

export function* apiSaga() {
  yield takeLatest(FETCH_IMAGES_REQUEST.type, fetchImages);
}
