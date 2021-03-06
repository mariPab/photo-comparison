import axios from 'axios';
import sagaHelper from 'redux-saga-testing';
import {
  getAll,
  getPhotoData,
  submitPhotos,
  editComparison,
  deleteComparison
} from '../saga';
import {
  GET_ALL_SUCCESS,
  GET_PHOTO,
  GET_PHOTO_SUCCESS,
  SUBMIT_PHOTOS,
  EDIT_COMPARISON,
  DELETE_COMPARISON,
  GET_ALL,
} from '../types';
import { API_URL } from '../../../config';
import { put } from 'redux-saga/effects';
import { mockedPhotoData } from "../../../../__mocks__/photoData";

describe('Photos Saga - ', () => {
  describe('getAll', () => {
    const it = sagaHelper(getAll());
    const mockRes = { data: [mockedPhotoData] };
    it('Should request for desired API call', apiReq => {
      expect(apiReq).toEqual(axios.get(`${API_URL}/all`));
      return mockRes;
    });
    it('then trigger GET_ALL_SUCCESS action', result => {
      expect(result).toEqual(put({
        type: GET_ALL_SUCCESS,
        payload: mockRes.data,
      }));
    });
    it('and then nothing', result => {
      expect(result).toBeUndefined();
    });
  });
  describe('getPhotoData', () => {
    const payload = { id: mockedPhotoData._id };
    const mockArgs = {
      type: GET_PHOTO,
      payload: payload
    };
    const mockRes = { data: mockedPhotoData };
    const it = sagaHelper(getPhotoData(mockArgs));
    it('Should request for desired API call', apiReq => {
      expect(apiReq).toEqual(axios.get(`${API_URL}/photos/${payload.id}`));
      return mockRes;
    });
    it('then trigger GET_PHOTO_SUCCESS action', result => {
      expect(result).toEqual(put({
        type: GET_PHOTO_SUCCESS,
        payload: mockRes.data,
      }));
    });
    it('and then nothing', result => {
      expect(result).toBeUndefined();
    });
  });
  describe('submitPhotos', () => {
    const formData = new FormData();
    const payload = { data: formData };
    const mockArgs = {
      type: SUBMIT_PHOTOS,
      payload: payload
    };
    const it = sagaHelper(submitPhotos(mockArgs));
    it('Should request for desired API call', apiReq => {
      expect(apiReq).toEqual(
        axios.post(`${API_URL}/submit`,
          payload.data, {
          headers: {
            'Content-Type': 'application/json',
          },
        }))
    });
    it('then trigger GET_ALL action', result => {
      expect(result).toEqual(put({
        type: GET_ALL,
      }));
    });
    it('and then nothing', result => {
      expect(result).toBeUndefined();
    });
  });
  describe('editComparison', () => {
    const formData = new FormData();
    const payload = { data: formData, id: mockedPhotoData._id };
    const mockArgs = {
      type: EDIT_COMPARISON,
      payload: payload
    };
    const mockRes = { data: mockedPhotoData };
    const it = sagaHelper(editComparison(mockArgs));
    it('Should request for desired API call', apiReq => {
      expect(apiReq).toEqual(
        axios.put(`${API_URL}/photos/${payload.id}`,
          payload.data, {
          headers: {
            'Content-Type': 'application/json',
          },
        }));
      return mockRes;
    });
    it('then trigger GET_PHOTO_SUCCESS action', result => {
      expect(result).toEqual(put({
        type: GET_PHOTO_SUCCESS,
        payload: mockRes.data,
      }));
    });
    it('and then nothing', result => {
      expect(result).toBeUndefined();
    });
  });

  describe('deleteComparison', () => {
    const payload = { id: mockedPhotoData._id };
    const mockArgs = {
      type: DELETE_COMPARISON,
      payload: payload
    };
    // const mockRes = { actionCode: 9999};
    const it = sagaHelper(deleteComparison(mockArgs));
    it('Should request for desired API call', apiReq => {
      expect(apiReq).toEqual(axios.delete(`${API_URL}/photos/${payload.id}`));
      // return mockRes;
    });
    it('then trigger GET_ALL action', result => {
      expect(result).toEqual(put({
        type: GET_ALL,
      }));
    });
    it('and then nothing', result => {
      expect(result).toBeUndefined();
    });
  });

});