const https = require('https');
const express = require('express');
const app = express();
const port = 500;
const path = require('path');
const url = require('./googleUrl');
const axios = require('axios');
console.log(url);
app.get('/', (req, res, next) => {
    // console.log(req.query.id) // "1"
    // console.log(path.join(__dirname, "/dist", "index.html"));
    // console.log(req.query);
    const gogUrl = "https://oauth2.googleapis.com/token";

    if (req.query.hasOwnProperty("code")) {
        axios.post(gogUrl, {
            grant_type: "authorization_code",
            client_id: "834462328952-hmjbsvstqalrd8tqcfmtbvbu9gpvedr2.apps.googleusercontent.com",
            client_secret: "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",
            redirect_uri: "http://localhost:500",
            code: req.query.code
        }).then((res) => {
            console.log("BELOW WEEEEEEEEEEEE")
            console.log(res.data);
        }).catch((error) => {
            console.log(error);
        })
    }

    next();
});

app.get('/login',(req,res)=>{
    res.send(url);
});

app.get('/login', (req, res, next) => {
    res.redirect(url);
});

const options = {
    hostname: "swapi.dev",
    port: 80,
    path: '/api/people/2/',
    method: "GET"
}

// https.get('https://swapi.dev/api/people/2/',(resp)=>{
//     let data = "";
//     resp.on("data",(d)=>{
//         data+= d;
//     })

//     resp.on('end',()=>{
//         console.log(data);
//     })
// })



// axios.get("https://swapi.dev/api/people/2/?format=json").then((res)=>{
//     console.log(res);
// })

// axios.post(gogUrl,{
//     grant_type:"authorization_code",
//     client_id:"834462328952-hmjbsvstqalrd8tqcfmtbvbu9gpvedr2.apps.googleusercontent.com",
//     client_secret:"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",
//     redirect_uri:"http://localhost:500",
//     code:
// })

app.use(express.static(path.join(__dirname, '/dist')));

app.listen(500);