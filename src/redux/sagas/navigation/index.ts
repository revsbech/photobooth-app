import { takeLatest, call, put } from 'redux-saga/effects';
import {
  NAVIGATION_NAVIGATE,
  NAVIGATION_ERROR,
} from '../../actions';

import navigationService from './navigationService';

function* handleNavigationRequests(action: GenericAction) {
  console.log("TEATSET");
  switch (action.type) {
    case NAVIGATION_NAVIGATE.type: {
      const payload = NAVIGATION_NAVIGATE.payload(action);
      console.log(payload, "PAYLOAD !!!!")
      const didNavigate = yield call(navigationService.navigate, payload.route, payload.params);
      if (!didNavigate) {
        yield put(
          NAVIGATION_ERROR.create({ message: 'error.invalid_navigation' }),
        );
      }
      break;
    }

    case NAVIGATION_ERROR.type: {
      const payload = NAVIGATION_ERROR.payload(action);
      throw Error(payload.message);
    }
  }
}

export function* navigationSaga() {
  yield takeLatest(
    [
      NAVIGATION_NAVIGATE.type,
      NAVIGATION_ERROR.type,
    ],
    handleNavigationRequests,
  );
}
