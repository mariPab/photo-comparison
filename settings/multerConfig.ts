import { Request } from 'express/index';
import multer from 'multer';
import uniqueString from 'unique-string';

const storage = multer.diskStorage({
  // FIXME: na pewno Request express?
  destination: (_req: Request, _file: any, clbck: any) => {
    clbck(null, './public/images/');
  },
  filename: (_req: Request, file: any, clbck: any) => {
    clbck(null, uniqueString() + '.' + file.originalname.split('.')[1]);
  },
});
const availableImageFormats = [
  'image/png',
  'image/jpg',
  'image/jpeg',
];
const fileFilter = (_req: Request, file: any, clbck: any) => {
  availableImageFormats.includes(file.mimetype) ? clbck(null, true) : clbck(null, false);
};
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});
const photosFields = [
  { name: 'before', maxCount: 1 },
  { name: 'after', maxCount: 1 },
];

const multerConfig = {
  upload,
  photosFields,
};

module.exports = multerConfig;