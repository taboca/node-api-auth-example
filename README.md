## Example for your first server API

In this repository you will have a node client and a node server app. We also have a JSON request which the server will try to authenticate.

### Secret

Notice that both the JS client and the JS server have the secret within the code, therefore the secret is not being transfered from the client to the server. 

### Envelope

Notice that the actual content, which is being checked on its validity, is the content of the request key within the JSON — only that part. It would have otherwise used the whole URL, such as the GET string but for learning purposes decided to use a JSON and to focus in a specific key. 

For testing

* You can change the key value, within the request-unsigned.json. 
* You can then sign this new envelope using the clientSign.js > request-signed.json
* turn on your server "API", the serverCheck.js
* Call.sh

Notice that this assumes the signed data is a string within a JSON value, the envelope
