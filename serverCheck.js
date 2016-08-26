var express = require('express');
var crypto = require('crypto');
var bodyParser = require('body-parser');
var app = express();  

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));

app.post('/api/v1/status', function(request, response) {

    console.log("Got response: " + response.statusCode);
    console.log(request.body);      // your JSON

    //var data = JSON.parse(request.body); 
    var secret = '6044';
    var dString = request.body.envelope;

    var hash = crypto.createHmac('sha256', secret)
                   .update(dString)
                   .digest('base64');

    console.log('From the post, signature = ' + request.body.signature);
    console.log('From math, signature = ' + hash);




});

app.listen(3000);

