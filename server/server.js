require("dotenv").config()
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
// const lyricsFinder = require("lyrics-finder")
const SpotifyWebApi = require("spotify-web-api-node")

const app = express()

// Set up cors options
const corsOptions = {
  origin: "https://aiplaylist.netlify.app", // replace with your domain
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(bodyParser.json())

// Enable CORS with whitelist
app.use(cors(corsOptions))

// app.use(bodyParser.urlencoded({ extended: true }))

const apiToken = require("./routes/apiToken/apiToken")

app.use(apiToken);

app.listen(process.env.PORT || 3001);
