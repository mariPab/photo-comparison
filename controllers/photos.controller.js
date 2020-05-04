
const Photo = require('../models/photo.model');

exports.loadAll = async (req, res) => {
  try {
    const photos = await Photo.find();
    if (!photos) res.status(404).json({ photo: 'Not Found' });
    else res.json(photos);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.loadById = async (req, res) => {
  try {
    const photo = await Photo.findOne({ _id: req.params.id });
    if (!photo) res.status(404).json({ photo: 'Not Found' });
    else res.json(photo);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.submit = async (req, res) => {
  const { title, description, width, height } = req.fields;
  try {
    let beforeFile,
      afterFile;
    if (req.files.before && req.files.after) {
      beforeFile = req.files.before.path.split('/').slice(-1)[0];
      afterFile = req.files.after.path.split('/').slice(-1)[0];
    } else res.status(404).json('Missing images');
    if (title && description && width && height) {
      const newPhoto = new Photo({
        title,
        description,
        dimensions: {
          width: width,
          height: height,
        },
        images: {
          before: beforeFile,
          after: afterFile,
        }
      });
      await newPhoto.save();
      res.json(newPhoto);
    } else {
      throw new Error('Wrong input!');
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.deleteById = (req, res) => {
  try {
    Photo.deleteOne({ _id: req.params.id }, (err) => {
      err ? res.status(404).json({ message: 'Not found...' }) : res.json({ message: 'Deleted successfully' });
    });
  } catch (err) {
    res.status(500).json(err);
  }
};