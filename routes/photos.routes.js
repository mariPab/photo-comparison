const express = require('express');
const router = express.Router();

const photos = require('../controllers/photos.controller');

router.get('/all', photos.loadAll);
router.get('/photos/:id', photos.loadById);
router.post('/submit', photos.submit);
router.delete('/photos/:id', photos.deleteById);

module.exports = router;