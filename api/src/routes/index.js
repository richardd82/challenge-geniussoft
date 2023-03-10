require('dotenv').config({path: '../.env'});
const Router = require('express');
const usersRoute = require('./usersRoute');
const schedulesRoute = require('./schedulesRoute');
const subjectsRoute = require('./subjectsRoute');
const pricesRoute = require('./pricesRoute');
const daysRoute = require('./daysRoute');
const router = Router();

router.use('/users', usersRoute);
router.use('/schedules', schedulesRoute);
router.use('/subjects', subjectsRoute);
router.use('/prices', pricesRoute);
router.use('/days', daysRoute);

module.exports = router;
