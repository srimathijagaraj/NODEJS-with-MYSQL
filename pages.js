const express = require("express");
const router =express.Router();

router.get("/",(req,res)=>{
    // res.send("<h1> HELLO WORLD!</h1>");
    res.render("index");
 });
 router.get("/register",(req,res)=>{
     // res.send("<h1> HELLO WORLD!</h1>");
     res.render("register");
 });
 
 router.get("/profile",(req,res)=>{
     // res.send("<h1> HELLO WORLD!</h1>");
     res.render("profile");
 });
 router.get("/home",(req,res)=>{
     // res.send("<h1> HELLO WORLD!</h1>");
     res.render("home");
 });

 module.exports=router;