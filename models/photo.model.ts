import mongoose from 'mongoose';

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
const Photo = mongoose.model('Photo', photoSchema);
// module.exports = mongoose.model('Photo', photoSchema);
export default Photo;