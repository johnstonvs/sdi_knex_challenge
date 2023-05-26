const express = require('express');
const server = express();
const PORT = process.env.PORT || 8080;
const knex = require('knex')(require('../knexfile.js')[process.env.PORT || 'development']);

server.use(express.json());

server.get('/movies', (req, res) => {
  knex('movies')
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(404).json({
        message: 'This is not the data you\'re looking for.'
      })
    });
});

server.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});