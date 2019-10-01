let express = require('express');
let app = express();
let port = 5959;

app.use(express.static(__dirname + '/'));
app.listen(port);

console.log('Server up on port: ' + port);
