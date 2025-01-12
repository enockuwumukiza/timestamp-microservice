const express = require('express');
const { getTimestamp } = require('./controller');
const router = express.Router();

router.get('/:date', getTimestamp);

module.exports = router;