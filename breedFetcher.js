const request = require('request');

const args = process.argv.slice(2);
const id = args[0];
const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + id;
console.log(url);
request(url, (error, response, body) => {
  if (error) throw error;

  console.log(JSON.parse(body));
});