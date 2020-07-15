import * as express from 'express';
import multer from '../config/multer';
import photos from '../controllers/photos.controller';

const router = express.Router();

router.get('/all', photos.loadAll);
router.get('/photos/:id', photos.loadById);
router.get('/random', photos.loadRandom);
router.post('/submit', multer.upload.fields(multer.photosFields), photos.submit);
router.delete('/photos/:id', photos.deleteById);
router.put('/photos/:id', multer.upload.fields(multer.photosFields), photos.editPhotoComparison);

export default router;