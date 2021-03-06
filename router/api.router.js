const router = require('express').Router();

const authRouter = require('./auth.router')
const userRouter = require('./user.router');
const carRouter = require('./car.router');

router.use('/users', userRouter);

router.use('/cars', carRouter);

router.use('/auth', authRouter);

module.exports = router;
