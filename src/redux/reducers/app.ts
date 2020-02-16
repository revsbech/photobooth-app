import {FETCH_IMAGES_SUCCESS, SET_DATE} from "../actions";
import {Image} from "../../entities/Image";

export interface AppState {
  isInitialized: boolean;
  imageList: Image[];
  selectedDate: Date;
}

const initialState :AppState = {
  isInitialized: false,
  imageList: [],
  selectedDate: new Date(),
};

export default function reducer(state = initialState, action: GenericAction): AppState {

  switch (action.type) {
    case FETCH_IMAGES_SUCCESS.type: {
      const payload = FETCH_IMAGES_SUCCESS.payload(action);
      return {...state, imageList: payload.images};
    }

    case SET_DATE.type: {
      const payload: Date = SET_DATE.payload(action);
      return {...state, selectedDate: payload};
    }
    default:
      return state;
  }
};

