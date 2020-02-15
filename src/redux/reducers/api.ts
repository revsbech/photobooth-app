import {FETCH_IMAGES_FAIL, FETCH_IMAGES_REQUEST, FETCH_IMAGES_SUCCESS} from "../actions";

export interface ApiState {
  isLoading: boolean;
}

const initialState:ApiState = {
  isLoading: false
};

export default function reducer(state = initialState, action: GenericAction): ApiState {
  switch (action.type) {
    case FETCH_IMAGES_REQUEST.type: {
      return {...state, isLoading: true}
    }

    case FETCH_IMAGES_SUCCESS.type: {
      return {...state, isLoading: false}
    }

    case FETCH_IMAGES_FAIL.type: {
      return {...state, isLoading: false}
    }

    default:
      return state;
  }
};

