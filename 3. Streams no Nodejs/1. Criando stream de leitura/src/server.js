import http from 'node:http'

const users = []
const server = http.createServer((req, res) => {
    const { method, url } = req 

    if(method == 'GET' && url == '/users'){
        return res
            .setHeader('Content-type', 'application-json')
            .end(JSON.stringify(users))
            .writeHead(200)
    }

    if(method == 'POST' && url == '/users'){
        users.push({
            id: 1,
            nome: "Alvaro",
            email: "teste@gmail.com"
        })
        return res.writeHead(201)
    }

    res.writeHead(404)
})
server.listen(3333)