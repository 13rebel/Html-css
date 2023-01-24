const http=require('http');
const url=require('url');
const fs=require('fs');
http.createServer((req,res) =>{
    const path=req.url
    if(path=='/'){
        res.writeHead(200 , {'content-type':'text/html'})
        const f=fs.readFileSync("./index.html");
        
        res.write(f);
        
        res.end();
    }
}).listen(7575)

