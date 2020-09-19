import mongoose = require('mongoose');
import { Document } from 'mongoose';

export interface BasicImageData {
  filename: string;
  contentType: string;
}

export interface Image extends BasicImageData {
  data: Buffer;
}

export interface DecodedImage extends BasicImageData {
  data: String;
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
    before: Image;
    after: Image;
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