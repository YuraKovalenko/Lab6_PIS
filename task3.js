const http = require("http");

http.createServer((request,  response) => {
    
        response.end("Kovalenko Yura | 2 course | IS-92"); 
   
}).listen(3000, () => {
    console.log("Port 3000");
});
