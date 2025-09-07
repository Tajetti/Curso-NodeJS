import http from 'node:http'
import { json } from 'node:stream/consumers'

const products = []
const server = http.createServer((req, res) => {
    const { method, url } = req

    if(method == 'POST' && url == '/products'){
        products.push({
            id: 1,
            nome: "Alvaro",
            email: "teste@gmail.com"
        })
        return res.end("Usuario criado com sucesso!")
    }

    if(method == 'GET' && url == '/products'){
        return res
            .setHeader('Content-type', 'application/json')
            .end(JSON.stringify(products))
    }
    
    return res.end('Não foi encontrado!')
})
server.listen(3333)