const express = require('express');
const router = express.Router();

const product = require('../controllers/photos.controller');

router.get('/photos/:id', product.loadPhotoById);

module.exports = router;