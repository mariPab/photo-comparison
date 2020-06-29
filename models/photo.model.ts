import mongoose, { Document } from 'mongoose';

export interface PhotoData extends Document {
  title: string;
  description: string;
  dimensions: {
    width: number;
    height: number;
  };
  images: {
    before: string;
    after: string;
  };
}

const photoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  images: {
    before: { type: String, required: true },
    after: { type: String, required: true },
  },
  dimensions: {
    width: { type: Number, required: true },
    height: { type: Number, required: true },
  },
}, { versionKey: false },
);
export default mongoose.model<PhotoData>('Photo', photoSchema);