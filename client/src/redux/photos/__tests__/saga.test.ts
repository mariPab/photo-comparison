import sagaHelper from 'redux-saga-testing';
import {
  getAll,
  getPhotoData,
  submitPhotos,
} from '../saga';
import {
  SET_ALL,
  GET_PHOTO,
  SET_PHOTO,
  SUBMIT_PHOTOS,
} from '../types';
import axios from 'axios';
import { API_URL } from '../../../config';
import { all, fork, takeEvery, put } from 'redux-saga/effects';
import { FormDataPayload } from '../types';
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
  });

});