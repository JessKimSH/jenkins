var http = require('http');

var server = http.createServer(function (req, res) {
  console.log('server started!!!')
  res.writeHead(200, { 'Content-Type' : 'text/plain' });
  res.end('Hello World');
});
console.log('Successfully Connected')

server.listen(3000);
