const http = require('http')
const port = process.env.PORT || 3000

const apiGet = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({
        message: 'Hello World'
    }))
}

const server = http.createServer((req, res) => {
    // normalize url by removing querystring, optional
    // trailing slash, and making it lowercase
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
    switch (path) {
        case '':
            res.writeHead(200, { 'Content-Type': 'text/plain' })
            res.end('Homepage')
            break
        case '/api':
            apiGet(req, res);
            break
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            res.end('Not Found')
            break
    }
})

server.listen(port, () => console.log(`server started on port ${port}; ` + 'press Ctrl-C to terminate....'));