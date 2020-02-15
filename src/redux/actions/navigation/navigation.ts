import { ActionCreator } from 'dense-redux-actions';

interface NavigateErrorType {
  message: string;
}

interface NavigationType {
  route: string;
  params: any;
}

// Action creators
export const NAVIGATION_NAVIGATE = new ActionCreator<NavigationType>(
  'NAVIGATION_NAVIGATETEST',
);

export const NAVIGATION_ERROR = new ActionCreator<NavigateErrorType>(
  'NAVIGATION_ERROR',
);
