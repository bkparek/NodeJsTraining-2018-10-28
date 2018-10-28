const http = require("http");
const fs = require("fs");
const xurl = require("url");

let server = http.createServer(function(request,response) {

    let url = request.url;

    switch(url)
    {
        case "/":
        response.writeHead(200,{'Content-Type':'text/html'});
        fs.readFile("./Public/index.html", function(err,data){
            if (err)
            {
                response.write(err);
            } else
            {
                response.write (data);
            }
            response.end();
        });
            break;
        /* case "authenticate":
            response.writeHead(200,{'Content-Type':'text/html'});
            response.write("<h1>User successfully loged in<h2>");
            response.end();
        /*default :
            response.writeHead(400,{'Content-Type':'text/html'});
            response.write("<h1>Page not Found <h2>");
            response.end(); */
    }
   
    if (url.startsWith("/authenticate"))
    {
        let querystring = xurl.parse(url,true);
        let email = querystring.query.email;
        let password =querystring.query.password;
        if  (email == password && email.length > 5)
        {
            response.write("<h1> Login Successfull<h1>");
            response.end();
        } else
        {
            response.write("<h1> LoginFailed<h1>");
            response.end();
        }
    }
});

server.listen(4000,function() {
    console.log("server is running on 4000 port");
});
