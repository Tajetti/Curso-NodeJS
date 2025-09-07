import http from 'node:http'

const server = http.createServer((req, res) => {
    const { method, url } = req 

    if(method == 'GET' && url == '/users'){
        return res.end("Buscando um user")
    }
    if(method == 'POST' && url == '/users'){
        return res.end("Criando um user")
    }

    res.end("Hello world")
})
server.listen(3333)