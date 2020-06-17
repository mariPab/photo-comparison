import * as express from 'express';
import multerConfig from '../settings/multerConfig';
import photos from '../controllers/photos.controller';

const router = express.Router();

router.get('/all', photos.loadAll);
router.get('/photos/:id', photos.loadById);
router.post('/submit', multerConfig.upload.fields(multerConfig.photosFields), photos.submit);
router.delete('/photos/:id', photos.deleteById);
router.put('/photos/:id', multerConfig.upload.fields(multerConfig.photosFields), photos.editPhotoComparison);

module.exports = router;
