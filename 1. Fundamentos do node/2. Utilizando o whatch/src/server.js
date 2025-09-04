import http from 'node:http'

const server = http.createServer((request, response) => {
    response.end("Olá, eu!")
})
server.listen(3333)