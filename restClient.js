const http = require('http');

const requestListener = function (req, res) {
  console.log(req);
  if(req.method === 'POST'){
    res.writeHead(200);
    res.end('Hello, World! FROM POST');
  } else {
    res.writeHead(200);
    res.end('Hello, World! FROM GET');
  }

  
}

const server = http.createServer(requestListener);
server.listen(8080);