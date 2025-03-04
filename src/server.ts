import http from 'http'

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.writeHead(200, {'Contect-Type': 'text/html'});
        response.end("<h1>Home</h1>")

        return;
    }

    if (request.url === '/about') {
        response.writeHead(200, {'Context-Type': 'text/html'});
        response.end('<h1>About</h1>')

        return;
    }

    if (request.url === '/my-account') {
        response.writeHead(403, {'Context-Type': 'text/plain'});
        response.end('You have no access to this page');

        return;
    }

    response.writeHead(404, {'Context-Type': 'text/plain'});
    response.end('Page not found');

    return;
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`)
});