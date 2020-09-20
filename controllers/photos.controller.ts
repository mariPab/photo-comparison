import Photo, { PhotoData } from '../models/photo.model';
import { Response, Request } from 'express/index';
import ImgHandler from '../helpers/ImgHandler';
import DataHandler from '../helpers/DataHandler';

type ServerRequest = (req: Request, res: Response) => Promise<void>;

const loadAll: ServerRequest = async (_req, res) => {
  try {
    const photos = await Photo.find();
    if (!photos) res.status(404).json({ photo: 'Not Found' });
    else {
      const decodedData = photos.map(photo => {
        return {
          ...DataHandler.returnPhotoData(photo),
          images: ImgHandler.returnDecodedImages(photo.images.before, photo.images.after),
        };
      });
      res.json(decodedData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const loadById: ServerRequest = async (req, res) => {
  try {
    const photo = await Photo.findOne({ _id: req.params.id });
    if (!photo) res.status(404).json({ photo: 'Not Found' });
    else {
      res.json({
        ...DataHandler.returnPhotoData(photo),
        images: ImgHandler.returnDecodedImages(photo.images.before, photo.images.after),
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const loadRandom: ServerRequest = async (_req, res) => {
  try {
    const count = await Photo.countDocuments();
    const rand = Math.floor(Math.random() * count);
    const photo = await Photo.findOne().skip(rand);
    if (!photo) res.status(404).json({ message: 'Not found' });
    else {
      res.json({
        ...DataHandler.returnPhotoData(photo),
        images: ImgHandler.returnDecodedImages(photo.images.before, photo.images.after),
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const submit: ServerRequest = async (req, res) => {
  if (req.body && req.files) {
    const { title, description, width, height } = req.body;
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };
    const { before, after } = files;
    try {
      let beforeFile,
        afterFile;
      if (before && after) {
        beforeFile = ImgHandler.encodeImage(before[0]);
        afterFile = ImgHandler.encodeImage(after[0]);
      } else throw new Error('Missing images');
      if (title && description && width && height) {
        const newPhoto = new Photo({
          title,
          description,
          dimensions: {
            width,
            height,
          },
          images: {
            before: beforeFile,
            after: afterFile,
          },
        });
        await newPhoto.save();
        res.json(newPhoto);
      } else {
        throw new Error('Wrong input!');
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

const editPhotoComparison: ServerRequest = async (req, res) => {
  if (req.body && req.files) {
    try {
      const { title, description, width, height } = req.body;
      const files = req.files as { [fieldname: string]: Express.Multer.File[] };
      const { before, after } = files;
      let beforeFile = null;
      let afterFile = null;
      if (before) beforeFile = ImgHandler.encodeImage(before[0]);
      if (after) afterFile = ImgHandler.encodeImage(after[0]);
      const photo = await Photo.findOne({ _id: req.params.id });
      if (!photo) res.status(404).json({ photo: 'Not Found' });
      else if (title && description && width && height) {
        photo.title = title;
        photo.description = description;
        photo.dimensions.width = width;
        photo.dimensions.height = height;
        if (beforeFile) photo.images.before = beforeFile;
        if (afterFile) photo.images.after = afterFile;
        await photo.save();
        res.json(photo);
      } else throw new Error('Wrong input!');
    } catch (err) {
      res.status(500).json(err);
    }
  }
};

const deleteById = (req: Request, res: Response): void => {
  try {
    Photo.findByIdAndDelete(req.params.id, (err: Error, doc: PhotoData | null): void => {
      if (err || !doc) res.status(404).json({ message: 'Data not found' });
      else {
        ImgHandler.deleteImageFromDir(doc.images.before.filename);
        ImgHandler.deleteImageFromDir(doc.images.after.filename);
        res.status(200).json({ message: 'Deleted successfully' });
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

export default {
  deleteById,
  editPhotoComparison,
  submit,
  loadById,
  loadAll,
  loadRandom,
};