const express = require("express");
const models = require("../models/users");

const app = express.Router();


app

/*.get("/async", async (req, res, next)=>{
    console.log("Outer function: 1");
   models.Async();
   res.send("Done!");
   console.log("Outer function: 2");
})*/




.get("/", (req, res, next)=>{
    models.GetAll()
    .then(user=>{
        res.send(user);
    })
    .catch(next);

})
.patch("/:user_id", (req, res, next) =>{

    models   .Update(req.params.user_id, req.body)
             .then( user=> res.send(user) )
             .catch(next) 

})
.delete("/:user_id", (req, res, next) =>{

    models   .Delete(req.params.user_id)
             .then( user=> res.send({ deleted: user }) )
             .catch(next) 

})
.post("/Login", (req,res,next) =>{
     models.Login(req.body.handle, req.body.password)
        .then(user =>{
            res.send(user);

        }) .catch(next)
      
        
    
})
.post("/register", (req,res,next) =>{
     models.Add(req.body)
     .then(user => {
        res.status(201).send(user);

     }).catch(next)

        
       

})
.post("/seed", (req,res,next) =>{
    models.Seed()
        .then(user => {
            res.status(201).send("Created");
    
         })
         .catch(next)
})

    

    


    


module.exports = app;