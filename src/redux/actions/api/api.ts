import { ActionCreator } from 'dense-redux-actions';
import {Image} from "../../../entities/Image";


interface SendSmsRequest {
  path: string;
  phoneNumber: string;
}

interface Images {
  images: Image[];
}

interface ApiFail {
  message: string;
}

export const FETCH_IMAGES_REQUEST = new ActionCreator('FETCH_IMAGES_REQUEST');
export const FETCH_IMAGES_SUCCESS = new ActionCreator<Images>('FETCH_IMAGES_SUCCESS');
export const FETCH_IMAGES_FAIL = new ActionCreator<ApiFail>('FETCH_IMAGES_FAIL');

export const SENDSMS_REQUEST = new ActionCreator<SendSmsRequest>('SENDSMS_REQUEST');
export const SENDSMS_SUCCESS = new ActionCreator('SENDSMS_SUCCESS');
export const SENDSMS_FAIL = new ActionCreator<ApiFail>('SENDSMS_FAIL');


