const express = require("express");
const app = express();
const UserRouter =require("../routes/UserRoute");
const LoginRoute = require("../routes/LoginRoute");

app.use(express.json());
app.use(UserRouter);
app.use(LoginRoute);

module.exports = app;