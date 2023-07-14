const express = require('express');
const guardian = require('./guardian');

const router = express.Router();

router.use('/guardian', guardian);

module.exports = router;
