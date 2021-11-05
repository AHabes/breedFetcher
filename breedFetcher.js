const request = require('request');


const fetchBreedDescription = (url, callback) => {
  const uri = 'https://api.thecatapi.com/v1/breeds/search?q=' + url;
  request(uri, (error, response, body) => {
    callback(error, JSON.parse(body)[0].description);
  });

};

module.exports = {fetchBreedDescription};