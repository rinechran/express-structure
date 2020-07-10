const status = require('./../utility/status');
const exception  = require('../utility/exception');
const userGet = require('./user_get');

const express = require('express');
const router = express.Router();

/**
 *
 */
router.get('/', async (req,res,next)=>{
    return userGet.exec()
        .then(result => status.Success(res,res,result))
        .catch(error => exception.ErrorHandling(req,res,error));
});


module.exports = router;
