// const express = require('express');
// const multer = require('multer')
// const randomID = require('@maripab/id-generator');
// const photos = require('../controllers/photos.controller');

import * as express from 'express';
import multer from 'multer';
import uniqueString from 'unique-string';
import photos from '../controllers/photos.controller';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (_req: Express.Request, _file: any, clbck: any) => {
    clbck(null, './public/images/');
  },
  filename: (_req: Express.Request, file: any, clbck: any) => {
    clbck(null, uniqueString() + '.' + file.originalname.split('.')[1]);
  },
});
const availableImageFormats = [
  'image/png',
  'image/jpg',
  'image/jpeg',
];
const fileFilter = (_req: Express.Request, file: any, clbck: any) => {
  availableImageFormats.includes(file.mimetype) ? clbck(null, true) : clbck(null, false);
};
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

router.get('/all', photos.loadAll);
router.get('/photos/:id', photos.loadById);
router.post('/submit', upload.array('photo', 2), photos.submit);
router.delete('/photos/:id', photos.deleteById);
router.put('/photos/:id', photos.editPhotoComparison);

module.exports = router;
