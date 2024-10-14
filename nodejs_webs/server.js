// console.log('Halo, kita akan belajar membuat server');
const http = require("http");
const { chunk } = require("lodash");
/**
 * Logika untuk menangani dan menanggapi request dituliskan pada fungsi ini
 * 
 * @param request: objek yang berisikan informasi terkait permintaan
 * @param response: objek yang digunakan untuk menanggapi permintaan
 */

const requestListener = (request, response) => {
    response.setHeader("Content-Type", 'application/json')
    response.setHeader("Powered-By", 'Node.js')

    const { method, url } = request;

    if(url === '/') {
        // TODO 2: logika respons bila url bernilai '/'
        if (method === 'GET'){
            response.statusCode = 200 
            response.end(JSON.stringify({
                "messege" : "ini adalah homepage"
            }))
        }
        else {
            response.statusCode = 400
            response.end(JSON.stringify({
                "messege" : "use get request!"
            }))
        }
    } else if(url === '/about') {
        // TODO 3: logika respons bila url bernilai '/about'
        if (method === 'GET') {
            response.statusCode = 200 
            response.end(JSON.stringify({
                "messege" : `ini adalah /about`
            }))
        }
        else if (method === 'POST'){
            
            let body  = []
            request.on('data', (chunk)=>{
                body.push(chunk)
            })
            request.on('end', ()=>{
                body = Buffer.concat(body).toString()
                const {name} = body
                response.statusCode = 202
                response.end(JSON.stringify({
                    "messege": `halo ${name}! selamat datang di about`
                }))
            })
        }
        else{
            response.statusCode = 400 
            response.end(JSON.stringify({
                "messege": "USE POST OR GET!!"
            }))
        }
        
    } else {
        // TODO 1: logika respons bila url bukan '/' atau '/about'
        response.statusCode = 404
        response.end(
            JSON.stringify({
                "messege" : `halaman tidak ditemukan code: ${response.statusCode}`
            })
        )
        
    }
 
};

const server = http.createServer(requestListener) 

const PORT = 5000
const host = "localhost";
server.listen(PORT, host, () =>{
    console.log(`Server berjalan pada http://${host}:${PORT}`)
})