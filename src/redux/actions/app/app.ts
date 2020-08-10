import { ActionCreator } from 'dense-redux-actions';

export const SET_DATE = new ActionCreator<Date>('SET_DATE');
export const TOGGLE_SMS_MODAL = new ActionCreator<boolean>('TOGGLE_SMS_MODAL');

