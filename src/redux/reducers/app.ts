

export interface AppState {
  isInitialized: boolean;
  imageList: string[];
}

const initialState = {
  isInitialized: false,
  imageList: ["processedImages/capture/2020/02/14/capture-114137.jpg","processedImages/capture/2020/02/14/capture-115554.jpg","processedImages/capture/2020/02/14/capture-115623.jpg","processedImages/capture/2020/02/14/capture-115647.jpg","processedImages/capture/2020/02/14/capture-115858.jpg","processedImages/capture/2020/02/14/capture-120005.jpg"],
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    /*
    case CONNECTION_STATUS:
      return {...state, connectionStatus: action.status}
    case UPDATE_APP_OUTDATED.type:
      let payload = UPDATE_APP_OUTDATED.payload(action);
      return {...state, requiresUpdate: payload}
    case INIT_APP_START.type:
      return {...state, isInitialized: false};
    case CHECKIN_SUCCESS.type: {
      let payload = CHECKIN_SUCCESS.payload(action);
      return {...state,
        requiresUpdate: payload.updateRequired
      }
    }
    case INIT_APP_FINISHED.type: {
      return {...state, isInitialized: true};
    }
    */
    default:
      return state;
  }
};

