import { put, takeLatest, select, delay } from 'redux-saga/effects';
import {GenericAction} from "dense-redux-actions";
import { Alert } from "react-native";
import Toast from 'react-native-simple-toast';

import {
  FETCH_IMAGES_FAIL,
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_SUCCESS,
  SENDSMS_FAIL, SENDSMS_REQUEST,
  SENDSMS_SUCCESS, SHOW_TOAST, TOGGLE_SMS_MODAL,
} from '../../actions';
import PhotoboothApi from "../../../api/client";
import {GlobalState} from "../../reducers";
import {Image} from "../../../entities/Image";

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

    let images:Image[] = yield client.getImages(
      date.getFullYear(),
      appendLeadingZeroes(date.getMonth() + 1),
      appendLeadingZeroes(date.getDate())
    );
    images.sort((a: Image, b: Image) => {
      // This might be very ineffecient, since we convert to dates on each compare. Maybe we should convert them to Date in the client
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);
      if (aDate == bDate) {
        return 0;
      }
      return (aDate < bDate ? 1 : -1);
    });

    yield put(FETCH_IMAGES_SUCCESS.create({images}));
  } catch (e) {
    yield put(FETCH_IMAGES_FAIL.create({message: e.message}));
  }
}

export function* sendSms(action: GenericAction) {
  try {
    const payload = SENDSMS_REQUEST.payload(action);

    const success = yield client.sendSms(payload.path, payload.phoneNumber);
    //yield delay(2000); // Fetch new images every 20 seconds
    yield put(SENDSMS_SUCCESS.create({}));

    Alert.alert(
      'SMS Afsendt',
      'Der er afsendt en sms med link til billedet. Der kan gå op til et minut før du modtager den.',
      []
    );

    // Close the modal when done (really a bit nasty that the API saga controls APP specific stuff, but hey, I had to do it fast
    yield delay(5000);
    yield put(TOGGLE_SMS_MODAL.create(false));

  } catch (e) {
    yield put(SENDSMS_FAIL.create({message: e.message}));
  }
}

export function* apiSaga() {
  yield takeLatest(FETCH_IMAGES_REQUEST.type, fetchImages);
  yield takeLatest(SENDSMS_REQUEST.type, sendSms);
}
