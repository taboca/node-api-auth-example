const crypto = require('crypto');
JSON.minify = require('node-json-minify');
JSON.canonicalStringify = require('canonical-json');

var data = require('./'+process.argv[2]);

const secret = '4423';

var dString = JSON.canonicalStringify(data.envelope);
var mString = JSON.minify(dString);

const hash = crypto.createHmac('sha256', secret)
                   .update(mString)
                   .digest('base64');

// Notice that signature has to be calculated with sorted keys and 
// also strict, no spaces. But it won't matter how you send, because
// we assume the same will happen in the backend, therefore 
// this approach of authentication assumes the backend will also 
// load, sort, and make strict, for the envelope part. 

data.signature = hash; 

console.log(JSON.stringify(data));


