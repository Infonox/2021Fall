const express = require("express");
const models = require("../models/posts");

const app = express.Router();


app
.get("/", (req, res, next)=>{
    res.send(models.GetAll());

})
.get("/search", (req, res, next)=>{
    res.send(models.Search(req.query.q));

})
.get("/:id", (req, res, next)=>{
    res.send(models.Get(req.params.id));

})

module.exports = app;