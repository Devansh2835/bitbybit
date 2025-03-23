const express= require("express")
const app= express()
const port= 8080
const path= require("path")
const { faker } = require('@faker-js/faker');
const mysql= require('mysql2')

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")))

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'bitbybit',
    password: '#pro2005'
});

app.listen(port,()=>{ 
    console.log("listening to port: 8080")
})
app.get("/",(req,res)=>{
    res.render("login.ejs")
})
app.post("/home",(req,res)=>{
    res.render("home.ejs")
})
app.post("/new",(req,res)=>{
    res.render("new.ejs")
    
})
let getRandomUser=()=> {
    return [
      faker.string.uuid(),
      faker.internet.username(),
      faker.internet.email(),
    ];
}

let data=[]
for(let i=0;i<=5;i++){
    data.push(getRandomUser())
}
console.log(data)



