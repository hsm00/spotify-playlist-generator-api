const path = require('path');
const express = require('express');
const cors = require('cors');

const apiToken = require('../../controllers/apiToken/apiTokenController');
const router = express.Router();

app.use(cors());

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
router.options('/api', cors(corsOptions));

router.post('/login', apiToken.getAccessToken);
router.post('/refresh', apiToken.getRefreshToken);
router.post('/api', apiToken.openAI)

module.exports = router;