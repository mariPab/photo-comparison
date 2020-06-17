import { Response, Request } from 'express/index';
import express from 'express';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import router from "./routes/photos.routes";

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + '/client/build')));

/* API ENDPOINTS */
app.use('/api', router);
app.use(express.static(path.join(__dirname + '/public')));


/* REACT WEBSITE */
app.get('*', (_req: Request, res: Response): void => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'), (err: Error) => {
    if (err) res.status(500).send(err);
  });
});

app.use((_req: Request, res: Response): void => {
  res.status(404).send({ message: 'not found...' });
});
process.env.NODE_ENV === 'production' ?
  mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PW}@cluster0-314sb.mongodb.net/PhotoComparison?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }) :
  mongoose.connect('mongodb://localhost:27017/photo-comparison', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', (): void => {
  console.log('Successfully connected to the database');
});
db.on('error', (err: Error): void => console.log('Error: ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
const server = app.listen(port, (): void => {
  console.log('Server is running on port: ' + port);
});

module.exports = server;