var http = require('http');
var server = http.createServer(function (request, response) {
  console.log('request starting...');
  response.write('hello client');
  response.end();
})

server.listen(3000);
console.log('Server running at 3000');
