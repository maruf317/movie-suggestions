const express = require("express");
//const cors = require('cors');
//const fetchUrl = require("fetch").fetchUrl;
//const fetch = require("fetch");
//const axios = require("axios");

import axios from 'axios';

const app = express();
const port = process.env.PORT || 5000;

//app.use(cors());
app.use(express.json());

const uri = "https://api.themoviedb.org/3"
const apiKey = "?api_key=e2f0ecaea4f6b74c81c6488cd6c40111";

const tokenUrl = uri+"/authentication/token/new"+apiKey;

let token;

//fetchUrl(tokenUrl, (error, meta, body) => {
//    console.log(body.toString());
//});

await axios.get(tokenUrl).then(response => {console.log(response);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});