const { Router } = require('express');
const path = require('path');

const home = Router();

const profiles = require('../../assets/profiles.json');

home.get('/', (request, response) => {
  response.send(profiles);
});

home.get('/img/:id', (request, response) => {
  response.sendFile(
    path.resolve(
      __dirname,
      '../../assets/img',
      `${request.params.id}.jpg`
    )
  );
});

module.exports = home;
