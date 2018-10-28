const express = require("express");
const auth = require("./services/user.service");
const xurl = require("url");
let app = express();
app.use(express.static(`${__dirname}/public`));

let currentUser ="";

app.use(function(request, response,next){
    console.log("Middleware is running....");
    next(" Some input from first middle ware");
});

app.use(function(data, request, response,next){
    console.log(data);
    console.log("This is ny second middleware....");
    next();
});

app.listen(4001,function(){
    console.log("Server is running");
});

app.get("/",function(request,response) {
    //console.log (__dirname);
    //response.send("<h1>Welcome to world of express JS</h1>");
    response.sendFile(__dirname+"/Public/index.html");
});

app.get("/authenticate?*",function(request,response) {
    let url = request.url;
    let querystring = xurl.parse(url,true);
    let email = querystring.query.email;
    let password =querystring.query.password;
    currentUser = email;

    let user1 = auth.authenticate(email,password);
    console.log(user1);
    if  (user1 != null)
    {
        //response.send("<h1> Login Successfull<h1>");
        response.sendFile(__dirname+"/Public/home.html");
    } else
    {
        response.send("<h1> Login Failed<h1>");
    }
});

app.get("/userRegister",function(request,response) {
    //console.log (__dirname);
    //response.send("<h1>Welcome to world of express JS</h1>");
    console.log(`Glogal user: ${currentUser}`);
    let user1 = auth.getUsersList(currentUser);
    if  (user1 != null)
    {
        //response.send("<h1> Login Successfull<h1>");
        response.send(user1);
    } else
    {
        response.send("<h1> Login Failed<h1>");
    }
});