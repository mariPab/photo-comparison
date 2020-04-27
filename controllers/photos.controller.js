
const Photo = require('../models/photo.model');

exports.loadPhotoById = async (req, res) => {
  try {
    const photo = await Photo.findOne({ _id: req.params.id });
    if (!photo) res.status(404).json({ photo: 'Not Found' });
    else res.json(photo);
  } catch (err) {
    res.status(500).json(err);
  }
};