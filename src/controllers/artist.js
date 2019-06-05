const Artist = require('../models/artist');

exports.create = (req, res) => {
  const artist = new Artist({
    name: req.body.name,
    genre: req.body.genre,
  });

  artist.save().then(() => {
    res.status(201).json(artist);
  });
};

exports.list = (req, res) => {
  Artist.find({}, (err, artists) => {
    if (!artists) {
      res.status(400).json({ error: 'There is an error' });
    } else {
      res.status(200).json(artists);
    }
  });
};

exports.find = (req, res) => {
  // findById - just requires findById(req.params.artistId).exec((err, artist) => { ... })
  Artist.findOne({ _id: req.params.artistId }).exec((err, artist) => {
    if (!artist) {
      res.status(404).json({ error: 'The artist could not be found.' });
    } else {
      res.status(200).json(artist);
    }
  });
};

exports.update = (req, res) => {
  Artist.findById(req.params.artistId, (err, artist) => {
    if (!artist) {
      res.status(404).json({ error: 'The artist could not be found.' });
    } else {
      artist.set(req.body).save().then(() => {
        res.status(200).json(artist);
      });
    }
  });
};

exports.delete = (req, res) => {
  Artist.findByIdAndDelete(req.params.artistId, (err) => {
    if (err) {
      res.status(404).json({ error: 'The artist could not be found.' });
    } else {
      res.sendStatus(204);
    }
  });
};
