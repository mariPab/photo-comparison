import sagaHelper from 'redux-saga-testing';
import {
  getAll,
  getPhotoData,
  submitPhotos,
  editComparison,
  deleteComparison
} from '../saga';
import {
  SET_ALL,
  GET_PHOTO,
  SET_PHOTO,
  SUBMIT_PHOTOS,
  EDIT_COMPARISON,
  DELETE_COMPARISON,
  GET_ALL,
} from '../types';
import axios from 'axios';
import { API_URL } from '../../../config';
import { put } from 'redux-saga/effects';

const mockPhotoData = {
  _id: '635736yb4574',
  title: 'title',
  description: 'description',
  dimensions: {
    width: 425,
    height: 356,
  },
  images: {
    before: 'before.jpg',
    after: 'after.jpg',
  },
};

describe('Photos Saga - ', () => {
  describe('getAll', () => {
    const it = sagaHelper(getAll());
    const mockRes = { data: [mockPhotoData] };
    it('Should request for desired API call', apiReq => {
      expect(apiReq).toEqual(axios.get(`${API_URL}/all`));
      return mockRes;
    });
    it('then trigger SET_ALL action', result => {
      expect(result).toEqual(put({
        type: SET_ALL,
        payload: mockRes.data,
      }));
    });
    it('and then nothing', result => {
      expect(result).toBeUndefined();
    });
  });
  describe('getPhotoData', () => {
    const payload = { id: mockPhotoData._id };
    const mockArgs = {
      type: GET_PHOTO,
      payload: payload
    };
    const mockRes = { data: mockPhotoData };
    const it = sagaHelper(getPhotoData(mockArgs));
    it('Should request for desired API call', apiReq => {
      expect(apiReq).toEqual(axios.get(`${API_URL}/photos/${payload.id}`));
      return mockRes;
    });
    it('then trigger SET_PHOTO action', result => {
      expect(result).toEqual(put({
        type: SET_PHOTO,
        payload: { ...mockRes.data },
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
    const payload = { data: formData, id: mockPhotoData._id };
    const mockArgs = {
      type: EDIT_COMPARISON,
      payload: payload
    };
    const it = sagaHelper(editComparison(mockArgs));
    it('Should request for desired API call', apiReq => {
      expect(apiReq).toEqual(
        axios.put(`${API_URL}/photos/${payload.id}`,
          payload.data, {
          headers: {
            'Content-Type': 'application/json',
          },
        }))
    });
    it('then trigger SET_PHOTO action', result => {
      expect(result).toEqual(put({
        type: SET_PHOTO,
        payload: { ...mockPhotoData },
      }));
    });
    it('and then nothing', result => {
      expect(result).toBeUndefined();
    });
  });

  describe('deleteComparison', () => {
    const payload = { id: mockPhotoData._id };
    const mockArgs = {
      type: DELETE_COMPARISON,
      payload: payload
    };
    const it = sagaHelper(deleteComparison(mockArgs));
    it('Should request for desired API call', apiReq => {
      expect(apiReq).toEqual(axios.delete(`${API_URL}/photos/${payload.id}`));
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