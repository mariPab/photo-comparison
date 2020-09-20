import mongoose = require('mongoose');
import { Document } from 'mongoose';

export interface ImageData<T> {
  filename: string;
  contentType: string;
  data: T;
}

export interface BasicData {
  title: string;
  description: string;
  dimensions: {
    width: number;
    height: number;
  };
}
export interface PhotoData extends BasicData, Document {
  images: {
    before: ImageData<Buffer>;
    after: ImageData<Buffer>;
  };
}

const photoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  images: {
    before: { filename: String, data: Buffer, contentType: String },
    after: { filename: String, data: Buffer, contentType: String },
  },
  dimensions: {
    width: { type: Number, required: true },
    height: { type: Number, required: true },
  },
}, { versionKey: false },
);
export default mongoose.model<PhotoData>('Photo', photoSchema);