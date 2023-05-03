require("dotenv").config()
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
// const lyricsFinder = require("lyrics-finder")
const SpotifyWebApi = require("spotify-web-api-node")


// Set up cors options
const express = require('express');

const app = express();

// Allow requests from specific origins
const allowedOrigins = ['https://aiplaylist.netlify.app'];
app.use(cors({
  origin: function(origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified origin.';
      return callback(new Error(msg), false);
    }

    return callback(null, true);
  }
}));


app.use(bodyParser.json())

const apiToken = require("./routes/apiToken/apiToken")

app.use(apiToken);

app.listen(process.env.PORT || 3001);
