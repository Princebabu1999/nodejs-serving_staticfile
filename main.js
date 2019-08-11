//serving file in nodejs
const http=require('http')
const fs= require('fs')
http.createServer((req,res)=>{
    if (req.url == '/'){
        const readstream=fs.createReadStream('./file.txt')
        res.writeHead(200,{'Content-type':'text/plain'})
        readstream.pipe(res)
    }
}).listen(5000)