const express = require('express');
const artistRouter = require('./routes/artist');

const app = express();

// app.get('*', (req, res) => {
//   res.status(200).json({ message: 'Hello World!' });
// });
app.use(express.json());
app.use('/artists', artistRouter);

module.exports = app;
