const http = require('http');
const fs = require('fs');

const requestListener = function(req, res) {
  // https://nodejs.org/api/http.html#class-httpincomingmessage
  // https://nodejs.org/api/http.html#class-httpserverresponse
  if(req.url === '/client.js') {
    res.writeHead(200, {'Content-Type': 'application/javascript'});
    fs.readFile('./app/client.js', 'utf-8', (err, data) => {
      if(err) throw err;
      res.write(data, 'utf-8');
      res.end();
    });
  } else {
    const x = foo;
    fs.readFile('./app/index.html', 'utf-8', (err, html) => {
      if(err) throw err;
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(html, 'utf-8');
      res.end();
    });
  }
};

const serverr = http.createServer(requestListener);
serverr.listen(1337);
console.log(`Server is running on port 1337`);
