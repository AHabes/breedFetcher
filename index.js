const {fetchBreedDescription} = require('./breedFetcher');

const args = process.argv.slice(2);
const id = args[0];

fetchBreedDescription(id, (error, body) => {
  if (error) throw error;
  console.log(body);
});