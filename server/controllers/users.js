const express = require("express");
const models = require("../models/users");

const app = express.Router();


app
.get("/", (req, res, next)=>{
    res.send(models.GetAll());

})

module.exports = app;