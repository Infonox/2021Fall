const express = require("express");
const models = require("../models/users");

const app = express.Router();


app
.get("/", (req, res, next)=>{
    res.send(models.GetAll());

}).get("/:user_id", (req, res, next)=>{
    res.send(models.Get(req.params.user_id));

})

module.exports = app;