const crypto = require('crypto');

var data = require('./request-unsigned.json');

const secret = '6044';

//var dString = JSON.stringify(data.envelope);
var dString = data.envelope;

const hash = crypto.createHmac('sha256', secret)
                   .update(dString)
                   .digest('base64');

data.signature = hash; 

console.log(JSON.stringify(data));


