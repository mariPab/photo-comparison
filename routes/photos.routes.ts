import * as express from 'express';
import { upload, photosFields } from '../settings/mutlerConfig';
import { photos } from '../controllers/photos.controller';

const router = express.Router();

router.get('/all', photos.loadAll);
router.get('/photos/:id', photos.loadById);
router.post('/submit', /* upload.fields(photosFields), */ photos.submit);
router.delete('/photos/:id', photos.deleteById);
router.put('/photos/:id', photos.editPhotoComparison);

module.exports = router;
