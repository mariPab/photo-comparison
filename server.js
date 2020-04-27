const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname + '/client/build')));


/* API ENDPOINTS */
// app.use('/api', require('./routes/any.routes'));

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

/* START SERVER */
const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});

module.exports = server;