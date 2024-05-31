const mysql =require("mysql");
const bcrypt=require("bcryptjs");

const db = mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE,

});
exports.register=(req,res)=>{
console.log(res.body);
/*
const name=req.body.name;
const email=req.body.email;
const password=req.body.password;
const confirm_paasword=req.body.confirm_paasword;
console.log(name);
console.log(email);*/
const{ name,email,password,confirm_password}=req.body;
db.query("select email from users where email=?",[email],
async (error,result)=>{
    if(error){
        console.log(error);
    }
    if(result.length>0){
        return res.render("register",{msg:"Email id already taken"});
    }
    else if(password!==confirm_password){
        return res.render("register",{msg:"Password do not match"})}
  let hashedPassword = await bcrypt.hash(password, 8);
  //console.log(hashPassword);

  db.query("insert into user set?",{name:name,email:email,password:hashedPassword},
  (error,result)=>{
    if(error){
        console.log(error);
    }
    else{
       console.log(result);
        return res.render("register",{msg:
         "user Registration sucess"});
    }
  });
});
    //res.send("Form Summited");
};