import {put, takeLatest, select} from "redux-saga/effects";
import {GenericAction} from "dense-redux-actions";
import {FETCH_IMAGES_FAIL, FETCH_IMAGES_REQUEST, FETCH_IMAGES_SUCCESS} from "../../actions";
import PhotoboothApi from "../../../api/client";
import {GlobalState} from "../../reducers";

let client = new PhotoboothApi()

function appendLeadingZeroes(n: number): string {
  if(n <= 9){
    return "0" + n;
  }
  return "" + n;
}

export function* fetchImages(action: GenericAction) {
  try {
    const date = yield select((state: GlobalState) => state.app.selectedDate);

    const images = yield client.getImages(
      date.getFullYear(),
      appendLeadingZeroes(date.getMonth() + 1),
      appendLeadingZeroes(date.getDate())
    );
    yield put(FETCH_IMAGES_SUCCESS.create({images}));
  } catch (e) {
    yield put(FETCH_IMAGES_FAIL.create({message: e.message}));
  }
}

export function* apiSaga() {
  yield takeLatest(FETCH_IMAGES_REQUEST.type, fetchImages);
}
