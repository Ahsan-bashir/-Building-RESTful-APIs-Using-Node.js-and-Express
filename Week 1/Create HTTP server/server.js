const http=require('http')
const PORT=process.env.PORT|| 5000

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"})
    res.end("<h1>Hello</h1>")
})

server.listen(PORT,()=>{
    console.log(`Server is Ready a running on port : ${PORT}`);
})

server.on("error",(error)=>{
    if(error=='EADRINUSE')
    console.log("Port Already in Use !");
})