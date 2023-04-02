import { SAVE_USERNAME, SAVE_EMAIL, SAVE_MOBILE, SAVE_LANGUAGE } from './types';

//Action to save userinfo
export const saveUserName = (key: string) => ({
  type: SAVE_USERNAME,
  payload: key,
});
export const saveMobile = (key: string) => ({
  type: SAVE_MOBILE,
  payload: key,
});

export const saveEmail = (key: string) => ({
  type: SAVE_EMAIL,
  payload: key,
});

export const saveAddress = (key: string) => ({
    type: SAVE_LANGUAGE,
    payload: key,
  });