const http = require('http')
const PORT = process.env.PORT || 5000
const todos = require('./todos')
const getReqData = require('./utils')
// console.log(todos);
const server = http.createServer(async (request, response) => {
    if (request.url === '/api/v1/todos' && request.method === 'GET') {
        response.writeHead(200, {
            'content-type': "application/json"
        })
        response.end(JSON.stringify(todos))

    } else if (request.url === '/api/v1/todos' && request.method === 'POST') {
        let req_body = await getReqData(request)
        todos.push(JSON.parse(req_body))
        response.writeHead(201, {
            'content-type': 'application/json'
        })
        response.end(JSON.stringify(JSON.parse(req_body)))
    }
    else if(request.url.match('/\/api\/v1\/todos\/([0-9])/') && request.method==='DELETE'){
        const id=request.url.split('/')[4]
        const todo=todos.find(t=>t.id===parseInt(id))   
        if(!todo){
            response.writeHead(404,{
                'content-type':'application/json'
            })
            response.end("No such Id is present !")
        }else{
            const index=todos.indexOf(todo)
            todos.splice(index,1)
            response.writeHead(200,{
                'content-type':'application/json'
            })
            response.end('ID is Deleted')
        }
    }

})

server.listen(PORT, () => {
    console.log(`server is ready and listening on port : ${PORT}`);

})

server.on('error', (error) => {
    if (error === 'EADRINUSE')

        console.log('port is already in use !');
})