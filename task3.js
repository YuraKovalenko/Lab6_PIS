const http = require("http");

http.createServer((request,  response) => {
    if(request.url === "/is-92-008"){
        response.end("Kovalenko Yura | 2 course | IS-92"); 
    } else{
        response.end("Error");
    }
}).listen(3000, () => {
    console.log("Port 3000");
});
