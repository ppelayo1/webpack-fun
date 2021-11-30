const express = require('express');

const app = express();

const path = require('path');
const axios = require('axios');
const { access } = require('fs');
const url = require('./googleUrl');

let accessToken = '';
app.get('/', (req, res, next) => {
  // console.log(req.query.id) // "1"
  // console.log(path.join(__dirname, "/dist", "index.html"));
  // console.log(req.query);

  const gogUrl = 'https://oauth2.googleapis.com/token';
  if (Object.prototype.hasOwnProperty.call(req.query, 'code')) {
    axios.post(gogUrl, {
      grant_type: 'authorization_code',
      client_id: '834462328952-hmjbsvstqalrd8tqcfmtbvbu9gpvedr2.apps.googleusercontent.com',
      client_secret: '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',
      redirect_uri: 'http://localhost:500',
      code: req.query.code,
    }).then((tokenRes) => {
      accessToken = tokenRes.data.access_token;
      console.log(tokenRes.data);
    }).catch((error) => {
      console.log(error);
    });
  }
  console.log(accessToken);
  next();
});

app.get('/login', (req, res) => {
  res.send(url);
});

app.use(express.static(path.join(__dirname, '/dist')));

app.listen(500);
