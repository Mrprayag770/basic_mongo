const express = require("express");
const mongoose = require("mongoose");
const User = require("./users");
const signpg = require("./signpg");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const ejs = require("ejs");
const app = express();
var crypto = require("crypto"); 
const { response } = require("express");
var key = "passoward";
var algo = "aes256";
var jsonParser = bodyParser.json();
const {localStorage} = require("node-localstorage");

app.set('view engine', 'ejs');


// async function main() {
mongoose.connect("mongodb+srv://prayag_SIHH:pp1234@cluster0.tuna9.mongodb.net/tutorial?retryWrites=true&w=majority",
{ useNewUrlParser: true,
useUnifiedTopology: true,
 });

// const client = new MongoClient(url);
// try{ await client.connect(); }
// catch(e){ console.log(e); }
// finally{ await client.close(); }
// main();


app.use(bodyParser.urlencoded ({extended: true}));

app.get("/", function (req, res){
    // res.send("hello world")
    res.render("index");
});

app.get("/drea", function (req, res){
    // res.send("hello world")
var s111  = "Maharasthra";
var c111 = "Pune";
var r111 = "kothrud";


    User.find({"reg_name": r111}, function(err, users) {
    
        res.render("drea", {
            
            people: [55, 49, 44, 24, 15],
            statename: s111,
            cityname: c111,
            regname: r111,
            usl: users
            
        }); 


// res.send("the sum is"+`<br/><br />email:${s11}<br />password:${c11}<br />`);
     
});
});





app.post("/dreaonpg", function (req, res){
    // res.send("hello world")
    var s11p  = String(req.body.n11p);
    var c11p = String(req.body.n22p);
    var r11p = String(req.body.n33p);

    User.find({"reg_name": r11p}, function(err, users) {
    
        res.render("drea", {
            
            people: [55, 49, 44, 24, 15],
            statename: s11p,
            cityname: c11p,
            regname: r11p,
            usl: users
            
        }); 


// res.send("the sum is"+`<br/><br />email:${s11}<br />password:${c11}<br />`);
     
});
});



app.post("/", function (req, res){

    //  res.send("jfffkmek");
var s11  = String(req.body.n11);
var c11 = String(req.body.n22);
var r11 = String(req.body.n33);

// res.send("the sum is"+`<br/><br />email:${s11}<br />password:${c11}<br />`);


User.find({"reg_name": r11}, function(err, users) {
    
    res.render("drea", {
        
        people: [55, 49, 44, 24, 15],
        statename: s11,
        cityname: c11,
        regname: r11,
        usl: users
        
    }); 

    
    
    // if (err) console.warn(err + "error in user function");
    // console.warn(users);
}); 





});


app.post("/nextpgh", function (req, res){

    //  res.send("jfffkmek");
const r11nt = localStorage.getItem('NAME');

// res.send("the sum is"+`<br/><br />email:${s11}<br />password:${c11}<br />`);


User.find({"reg_name": r11nt}, function(err, users) {
    
    res.render("insertt", {
        
        people: [55, 49, 44, 24, 15],
        regnamep: r11nt,
        usl: users
        
    }); 

    
    
    // if (err) console.warn(err + "error in user function");
    // console.warn(users);
}); 



});

app.listen(3000, function (req, res) {
   console.log("3000 port running........ ");
}); 







app.get("/signin.sih", jsonParser, function (req, res){
    // res.send("hello world")

res.render("signin");
    // res.render("signin");
});

app.post('/signinj', function(req, res) { 
res.render("signin");
});


app.post('/signinjjj', function(req, res) { 

res.render("index");
});

// const collection = client.db("tutorial").collection("users");
// const users = await collection.find({});


app.post("/insertt", function (req, res){
    res.render("/insertt");
    }); 


    app.get("/insertt", function (req, res) {
        // res.send("hello world")
        res.render("insertt");    
    });
    