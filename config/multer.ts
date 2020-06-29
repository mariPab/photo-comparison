import { Request } from 'express';
import multer from 'multer';
import uniqueString from 'unique-string';

type Callback = (err: Error | null, dest: string) => void;

const storage = multer.diskStorage({
  destination: (_req: Request, _file: Express.Multer.File, clbck: Callback) => {
    clbck(null, './public/images/');
  },
  filename: (_req: Request, file: Express.Multer.File, clbck: Callback) => {
    clbck(null, uniqueString() + '.' + file.originalname.split('.')[1]);
  },
});
const availableImageFormats = [
  'image/png',
  'image/jpg',
  'image/jpeg',
];
const fileFilter = (_req: Request, file: Express.Multer.File, clbck: multer.FileFilterCallback) => {
  availableImageFormats.includes(file.mimetype) ? clbck(null, true) : clbck(null, false);
};
export const upload: any = multer({
  storage: storage,
  fileFilter: fileFilter,
});
export const photosFields = [
  { name: 'before', maxCount: 1 },
  { name: 'after', maxCount: 1 },
];
