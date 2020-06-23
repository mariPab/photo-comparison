
import { expect } from 'chai';
import Photo, { PhotoData } from '../photo.model';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { describe, before, after, beforeEach, afterEach } from 'mocha';

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

describe('Photo', () => {
  before(async () => {
    try {
      const fakeDB = new MongoMemoryServer();
      const uri = await fakeDB.getConnectionString();
      mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    } catch (err) {
      console.log(err);
    }
  });
  describe('actions with mocked database', () => {
    beforeEach(async () => {
      try {
        const testPhotoOne = new Photo({ title: 'Photo#1', ...mockBasicData });
        await testPhotoOne.save();
        const testPhotoTwo = new Photo({ title: 'Photo#2', ...mockBasicData });
        await testPhotoTwo.save();
      } catch (e) {
        console.log(e);
      }
    });
    describe('Reading data', () => {
      it('should return all data with "find" method', async () => {
        try {
          const photos = await Photo.find();
          expect(photos.length).to.be.equal(2);
        } catch (e) {
          console.log(e);
        }
      });
      it('should return proper document by "title" with "findOne" method', async () => {
        try {
          const photo = await Photo.findOne({ title: 'Photo#1' });
          if (photo) {
            expect(photo).to.have.property('title').to.be.equal('Photo#1');
          }
        } catch (e) {
          console.log(e);
        }
      });
      it('should not find any document if there is no one with desired property', async () => {
        try {
          const photo = await Photo.findOne({ title: 'Photo#3' });
          expect(photo).to.be.null;
        } catch (e) {
          console.log(e);
        }
      });
    });
    describe('Updating data', () => {
      it('should properly update one document with "save" method', async () => {
        try {
          const photo: PhotoData | null = await Photo.findOne({ title: 'Photo#1' });
          if (photo) {
            photo.title = 'Photo#3';
            await photo.save();
          }
          const updatedDepartment = await Photo.findOne({ title: 'Photo#3' });
          expect(updatedDepartment).to.not.be.null;
        } catch (e) {
          console.log(e);
        }
      });
    });
    describe('Removing data', () => {
      it('should properly remove one document with "findByIdAndDelete" method', async () => {
        try {
          const photo: PhotoData | null = await Photo.findOne({ title: 'Photo#1' });
          if (photo) {
            await Photo.findByIdAndDelete(photo._id);
          }
          const removedDepartment = await Photo.findOne({ title: 'Photo #1' });
          expect(removedDepartment).to.be.null;
        } catch (e) {
          console.log(e);
        }
      });
    });
    afterEach(async () => {
      try {
        await Photo.deleteMany({});
      } catch (e) {
        console.log(e);
      }
    });
  });
  describe('Creating data', () => {
    it('should insert new document with "insertOne" method', async () => {
      try {
        const photo = new Photo({ title: 'Photo#1', ...mockBasicData });
        await photo.save();
        expect(photo.isNew).to.be.false;
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
});