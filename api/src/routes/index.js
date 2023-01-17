require('dotenv').config({path: '../.env'});
const Router = require('express');
const usersRoute = require('./usersRoute');
const router = Router();

router.use('/', usersRoute);

module.exports = router;
