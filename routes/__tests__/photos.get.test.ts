import chai from 'chai';
import chaiHttp from 'chai-http';
import { server } from '../../server';
import Photo from '../../models/photo.model';
import { describe, before, after } from 'mocha';

chai.use(chaiHttp);

const expect = chai.expect;
const request = chai.request;

const mockBasicData = {
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

describe('GET api', () => {
  before(async () => {
    try {
      const testPhotoOne = new Photo({
        _id: '5d9f1140f10a81216cfd4408',
        title: 'Photo#1',
        ...mockBasicData,
      });
      await testPhotoOne.save();
      const testPhotoTwo = new Photo({
        _id: '5d9f1159f81ce8d1ef2bee48',
        title: 'Photo#2',
        ...mockBasicData,
      });
      await testPhotoTwo.save();
    } catch (e) {
      console.log(e);
    }
  });
  describe('/all', () => {
    it('should return all db documents', async () => {
      try {
        const res = await request(server).get('/api/all');
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.be.equal(2);
      } catch (e) {
        console.log(e);
      }
    });
  });
  describe('/photos/:id', () => {
    it('should return one department by id ', async () => {
      try {
        const res = await request(server).get('/api/photos/5d9f1140f10a81216cfd4408');
        expect(res.body).to.be.an('object');
        expect(res.body).to.not.be.null;
      } catch (e) {
        console.log(e);
      }
    });
  });
  after(async () => {
    try {
      await Photo.deleteMany({});
    } catch (e) {
      console.log(e);
    }
  });
});