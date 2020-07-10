const express = require('express');
const router = express.Router();

// 유저 정보
router.use('/users', require('./users'));


module.exports = router;
