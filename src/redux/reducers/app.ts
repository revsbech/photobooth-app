import {FETCH_IMAGES_SUCCESS} from "../actions";

export interface AppState {
  isInitialized: boolean;
  imageList: string[];
}

const initialState :AppState = {
  isInitialized: false,
  imageList: [],
};

export default function reducer(state = initialState, action: GenericAction): AppState {

  switch (action.type) {
    case FETCH_IMAGES_SUCCESS.type: {
      const payload = FETCH_IMAGES_SUCCESS.payload(action);
      return {...state, imageList: payload.images}
    }

    default:
      return state;
  }
};

