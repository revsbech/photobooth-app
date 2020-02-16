import { ActionCreator } from 'dense-redux-actions';
import {Image} from "../../../entities/Image";

interface Images {
  images: Image[];
}

interface ApiFail {
  message: string;
}

export const FETCH_IMAGES_REQUEST = new ActionCreator('FETCH_IMAGES_REQUEST');
export const FETCH_IMAGES_SUCCESS = new ActionCreator<Images>('FETCH_IMAGES_SUCCESS');
export const FETCH_IMAGES_FAIL = new ActionCreator<ApiFail>('FETCH_IMAGES_FAIL');


