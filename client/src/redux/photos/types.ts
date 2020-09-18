import { PhotoInterface } from '../../interfaces/photos';

export const GET_PHOTO = 'GET_PHOTO';
export const GET_PHOTO_FAIL = 'GET_PHOTO_FAIL';
export const GET_PHOTO_SUCCESS = 'GET_PHOTO_SUCCESS';
export const GET_ALL = 'GET_ALL';
export const GET_ALL_FAIL = 'GET_ALL_FAIL';
export const GET_ALL_SUCCESS = 'GET_ALL_SUCCESS';
export const SUBMIT_PHOTOS = 'SUBMIT_PHOTOS';
export const EDIT_COMPARISON = 'EDIT_COMPARISON';
export const DELETE_COMPARISON = 'DELETE_COMPARISON';
export const REDIRECT_TO_RANDOM_PHOTO = 'REDIRECT_TO_RANDOM_PHOTO';

export interface PhotoState {
  photoData: PhotoInterface;
  allPhotos: PhotoInterface[];
  loading: boolean;
  error: boolean;
}
/* Basic Interfaces/Types */
export interface BasicAction {
  type: string
}
type IdPayload = {
  id: string;
}
export type FormDataPayload = {
  data: globalThis.FormData
}
interface ActionWithIDPayload extends BasicAction {
  payload: IdPayload;
}

/* Interfaces/types for every action */
export type GetPhotosList = BasicAction;

export interface SetList extends BasicAction {
  payload: PhotoInterface;
}
export type GetPhotoData = ActionWithIDPayload;
export interface SetPhotoData extends BasicAction {
  payload: PhotoInterface;
}
export interface SubmitPhoto extends BasicAction {
  payload: FormDataPayload;
}
export interface EditComparison extends BasicAction {
  payload: FormDataPayload & IdPayload;
}
export type DeleteComparison = ActionWithIDPayload;
export interface RedirectToRandomPhoto extends BasicAction {
  payload: {
    history: any
  };
};
export type PhotosReducerTypes = SetList | SetPhotoData;