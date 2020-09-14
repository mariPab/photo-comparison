import mongoose = require('mongoose');
import { Document } from 'mongoose';

export interface Image {
  contentType: string;
  data: Buffer;
}

export interface PhotoData extends Document {
  title: string;
  description: string;
  dimensions: {
    width: number;
    height: number;
  };
  images: {
    before: Image;
    after: Image;
  };
}

const photoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  images: {
    before: { data: Buffer, contentType: String },
    after: { data: Buffer, contentType: String },
  },
  dimensions: {
    width: { type: Number, required: true },
    height: { type: Number, required: true },
  },
}, { versionKey: false },
);
export default mongoose.model<PhotoData>('Photo', photoSchema);