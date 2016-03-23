var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));

// requires and runs code from mongoose.js
// require('./server/config/mongoose.js');
// requires and runs the code from routes.js file and passes it app so that we can attach our routing rules to our express application!
// require('./server/config/routes.js')(app);

app.listen(8888, function(){
  console.log('Listening on port 8888');
})
