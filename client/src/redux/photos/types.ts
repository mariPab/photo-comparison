import { PhotoInterface } from '../../interfaces/photos';

export const GET_PHOTO = 'GET_PHOTO';
export const SET_PHOTO = 'SET_PHOTO';
export const GET_ALL = 'GET_ALL';
export const SET_ALL = 'SET_ALL';
export const SUBMIT_PHOTOS = 'SUBMIT_PHOTOS';
export const EDIT_COMPARISON = 'EDIT_COMPARISON';
export const DELETE_COMPARISON = 'DELETE_COMPARISON';

export interface PhotoState {
  photoData: PhotoInterface;
  allPhotos: PhotoInterface[];
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
/* Interfaces for every action */
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

export type PhotosReducerTypes = SetList | SetPhotoData;