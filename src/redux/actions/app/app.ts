import { ActionCreator } from 'dense-redux-actions';
import { Image } from '../../../entities/Image';

export const SET_DATE = new ActionCreator<Date>('SET_DATE');
export const TOGGLE_SMS_MODAL = new ActionCreator<boolean>('TOGGLE_SMS_MODAL');


interface ToastMessage {
  text: string;
}

export const SHOW_TOAST = new ActionCreator<ToastMessage>('SHOW_TOAST');

