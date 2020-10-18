import chai from 'chai';
import chaiHttp from 'chai-http';
import { server } from '../../server';
import Photo from '../../models/photo.model';
import { describe, before } from 'mocha';
import { mockedPhotoData } from '../../__mocks__/photoData';

chai.use(chaiHttp);

const expect = chai.expect;
const request = chai.request;

// const mockBasicData = {
//   description: 'description',
//   dimensions: {
//     width: 425,
//     height: 356,
//   },
//   images: {
//     before: 'before.jpg',
//     after: 'after.jpg',
//   },
// };

describe('DELETE /api/photos/:id', () => {
  before(async () => {
    try {
      const testPhotoOne = new Photo({
        ...mockedPhotoData,
        _id: '5d9f1140f10a81216cfd46g8',
        title: 'Photo#1',
      });
      await testPhotoOne.save();
    } catch (e) {
      console.log(e);
    }
  });
  it('should remove indicated document and return success', async () => {
    try {
      const res = await request(server).delete('/api/photos/5d9f1140f10a81216cfd46g8');
      const removedDoc = await Photo.findOne({ title: 'Photo#1' });
      expect(res.status).to.be.equal(200);
      expect(res.body).to.not.be.null;
      expect(removedDoc).to.be.null;
    } catch (e) {
      console.log(e);
    }
  });

});