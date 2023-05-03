require("dotenv").config()
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
// const lyricsFinder = require("lyrics-finder")
const SpotifyWebApi = require("spotify-web-api-node")

const app = express()
app.use(cors())

const whitelist = ["https://aiplaylist.netlify.app"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))

app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

const apiToken = require("./routes/apiToken/apiToken")

app.use(apiToken);



app.listen(process.env.PORT || 3001);
