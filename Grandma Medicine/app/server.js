var express = require('express');
var app = express();
app.use('/', express.static('./public')).listen(8080);

console.log('\nClient server is listeninn On Port 8080 ..');