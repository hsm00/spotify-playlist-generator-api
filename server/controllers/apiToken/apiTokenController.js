require("dotenv").config()
const SpotifyWebApi = require('spotify-web-api-node')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))


exports.getAccessToken = (req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
    })
    console.log()
    spotifyApi.authorizationCodeGrant(code).then(data => {
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in,
        })
    }).catch((err) => {
        console.log(err)
        res.sendStatus(400)
    })
}

exports.getRefreshToken = (req, res) => {
    const refreshRefreshToken = req.body.refreshToken
    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: refreshRefreshToken,
    })
    spotifyApi.refreshAccessToken().then(data => {
        res.json({
            accessToken: data.body.access_token,
        })
    }).catch((err) => {
        console.log(err)
        res.sendStatus(400)
    })
}