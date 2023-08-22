const http=require('http')
const PORT=process.env.PORT|| 5000
const todos =require('./todos')
// console.log(todos);
const server=http.createServer((request,response)=>{
if(request.url==="/api/v1/todos" && request.method==='GET'){
    response.writeHead(200,{
        'content-type':"application/json"
    })
  
    response.end(JSON.stringify(todos))
}
})

server.listen(PORT,()=>{
    console.log(`server is ready and listening on port : ${PORT}`);
   
})

server.on('error',(error)=>{
    if(error==='EADRINUSE')

console.log('port is already in use !');})