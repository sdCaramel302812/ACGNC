const feathers = require('@feathersjs/feathers');
const rest = require('@feathersjs/rest-client');
const axios = require('axios');

const app = feathers();

const restClient = rest('http://localhost:3030');
// Configure an AJAX library (see below) with that client 
//app.configure(restClient.fetch(fetch));
app.configure(restClient.axios(axios));


const TOKEN = process.env.TOKEN;

console.log(TOKEN);

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  });
}

function post(api, data) {
  app.service(api).create(
    data, {
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TOKEN}`
    }
  });
}

const data = require('./init-works-tag.json');
data.tags.forEach(element => {
//  post('works-tag', {"name": element});
});
