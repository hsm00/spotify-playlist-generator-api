const path = require('path');
const express = require('express');
const cors = require('cors');

const apiToken = require('../../controllers/apiToken/apiTokenController');
const router = express.Router();

app.use(cors());

router.post('/login', apiToken.getAccessToken);
router.post('/refresh', apiToken.getRefreshToken);
router.post('/api', apiToken.openAI)

module.exports = router;