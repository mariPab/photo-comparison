import chai from 'chai';
import chaiHttp from 'chai-http';
import { server } from '../../server';
import Photo from '../../models/photo.model';
import { describe, after } from 'mocha';
// import { mockedPhotoData } from '../../__mocks__/photoData';
import fs from 'fs';

chai.use(chaiHttp);

const expect = chai.expect;
const request = chai.request;

describe('POST /api/submit', () => {
  it('should insert new document to db and return success', async () => {
    try {
      const res = await request(server).post('/api/submit')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .field('title', '#Photo#1')
        .field('description', '#Description#1')
        .field('width', '640')
        .field('height', '480')
        .attach('before', fs.readFileSync(''));
      const newPhoto = await Photo.findOne({ title: '#Photo#1' });
      expect(res.status).to.be.equal(200);
      expect(res.body).to.be.an('object');
      expect(newPhoto).to.not.be.null;
    } catch (e) {
      console.log(e);
    }
  });
  after(async () => {
    try {
      await Photo.deleteMany({});
    } catch (e) {
      console.log(e);
    }
  });
});