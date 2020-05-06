const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const formidable = require('express-formidable');
const randomID = require('@maripab/id-generator');
const app = express();

/* MIDDLEWARE */
app.use(cors());

app.use(formidable({ uploadDir: './public/uploads/' }, [{
  event: 'fileBegin', // on every file upload...
  action: (req, res, next, name, file) => {
    const fileName = randomID(10) + '.' + file.name.split('.')[1];
    file.path = __dirname + '/public/images/photo_' + fileName;
  }
},
]));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + '/client/build')));

/* API ENDPOINTS */
app.use('/api', require('./routes/photos.routes'));
app.use(express.static(path.join(__dirname + '/public')));


/* REACT WEBSITE */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'), err => {
    if (err) res.status(500).send(err);
  });
});

app.use((req, res) => {
  res.status(404).send({ message: 'not found...' });
});
process.env.NODE_ENV === "production" ?
  mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PW}@cluster0-314sb.mongodb.net/PhotoComparison?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }) :
  mongoose.connect('mongodb://localhost:27017/photo-comparison', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', err => console.log('Error: ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});

module.exports = server;