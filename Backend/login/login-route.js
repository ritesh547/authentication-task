const express = require('express');
const loginRouter = new express.Router();
const loginController = require('./login-controller');

loginRouter.post('/login', loginController.login);

module.exports = loginRouter;