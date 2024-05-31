const express=require("express");
const mysql=require("mysql");
const doenv=require("dotenv");
const path = require("path");
const hbs=require("hbs");

const app = express();

doenv.config({
    path:"./.env",
});
const db = mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE,

});
db.connect((error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("mysql connection sucessfull");
    }
});

app.use(express.urlencoded({extended:false}));

//console.log(__dirname);
const location=path.join(__dirname, "./public");
app.use(express.static(location));
app.set("view engine","hbs");

const partialsPath=path.join(__dirname,"./views/partials");
hbs.registerPartials(partialsPath);


app.use("/",require("./routes/pages"));

app.use("/auth",require("./routes/auth"));

app.listen(5000,()=>{
    console.log("Server Started @Port 5000");
});
