const express = require('express');
const bodyparser = require('body-parser')
const app = express();

app.use(express.static("static"));

app.use(bodyparser.urlencoded({extended: false}));

app.set("view engine", "ejs");


app.get("/",function(req, res, next){
    res.send("Tu madarchod hai!!!");
});

app.get("/first",function(req, res, next){
    //res.send("Tu madarchod hai!!!, pehli baar");

    if (req.query.baapka=="lund"){
        res.send("Hai naa");
        return;
    }
});

app.get("/second",function(req, res, next){
    res.send("Tu madarchod hai!!!, dusri baar");
});

app.post("/query", function(req, res, next){
    //res.send(Math.random() + " " + JSON.stringify(req.body));

    if (!req.body.username){
        res.send("Username field is empty!");
        return;
    }
    if(!req.body.password){
        res.send("Password field is empty!");
        return;
    }

    res.send("Your Username is " + req.body.username + " and your Password is " + req.body.password);
});

app.get("/random", function(req, res,next){
    res.send(String(Math.floor(Math.random()*10000)))
});


app.get("/third", function(req, res, next){
    if (req.query.lang == "node"){
        res.render("test1",{
            title: "Node JS",
            topic: "Node EJS Template Engine",
            status: 0,
            letter: ["a","b","c"],
            error: {code: 0, msg: "No error"}
        });
    }
    else if (req.query.lang == "python"){
        res.render("test1",{
            title: "Python",
            topic: "Node EJS Template Engine",
            status: 1,
            letter: ["p","q","r"],
            error: {code: 1, msg: "Little error"}
        });
    }
    
    else if (req.query.lang == "c"){
        res.render("test1",{
            title: "C++",
            topic: "Node EJS Template Engine",
            status: 2,
            letter: ["x","y","z"],
            error: {code: 2, msg: "Full error"}
        });
    }
});

app.listen(8000);