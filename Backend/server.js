const express = require('express');
const app = express();
const cors = require('cors');
require('./db');

const userRoute = require('./signup/signup-route');
const loginRoute = require('./login/login-route');

app.use(express.json());
app.use(cors());
app.use('/', userRoute);
app.use('/', loginRoute);

app.listen(4000);