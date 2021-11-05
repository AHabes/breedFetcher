const request = require('request');


const fetchBreedDescription = (url, callback) => {
  const uri = 'https://api.thecatapi.com/v1/breeds/search?q=' + url;
  request(uri, (error, response, body) => {
    if (error) callback(error, null);
    if (response.statusCode !== 200)
      callback(Error(`The request was not successful, code ${response.statusCode}`), null);
    callback(null, JSON.parse(body)[0].description);
  });

};

module.exports = {fetchBreedDescription};