import {FETCH_IMAGES_SUCCESS, SET_DATE, TOGGLE_SMS_MODAL} from "../actions";
import {Image} from "../../entities/Image";

export interface AppState {
  isInitialized: boolean;
  imageList: Image[];
  selectedDate: Date;
  smsModalOpen: boolean;
}

const initialState :AppState = {
  isInitialized: false,
  imageList: [],
  selectedDate: new Date(),
  smsModalOpen: false,
};

export default function reducer(state = initialState, action: GenericAction): AppState {

  switch (action.type) {
    case FETCH_IMAGES_SUCCESS.type: {
      const payload = FETCH_IMAGES_SUCCESS.payload(action);
      return {...state, imageList: payload.images};
    }
    case TOGGLE_SMS_MODAL.type: {
      const payload = TOGGLE_SMS_MODAL.payload(action)
      return {...state, smsModalOpen: payload}
    }
    case SET_DATE.type: {
      const payload: Date = SET_DATE.payload(action);
      return {...state, selectedDate: payload};
    }
    default:
      return state;
  }
};

