## Example for your first server API

In this repository you will have a node client and a node server app. We also have a JSON request which the server will try to authenticate.

### Secret and key value note 

Notice that both the JS client and the JS server have the secret within the code, therefore the secret is not being transfered from the client to the server. 

Why you see a key value being passed? this is for nothing. This is just because in a real world code, the key is how I would be able to find quicky using associative array approach, or a database; therefore the idea of using/passing a key is simply to help the server to locate the secret sibbling. 

### Envelope

Notice that the actual content, which is being checked on its validity, is the content of the envelope inner JSON.

### JSON strictness and more

Notice that this only will work if you assume that the envelope part of the JSON is strictly the same; while you have to acknowledge that JSON implementations may use various encoding for JSON. 

With this, you have to be aware that the signature generation depends on a sorting and compression specification on both sides, client and server. So what we have on each end is: 

* Client code, that generates a signature, using secret, using a string serialization of the JSON envelope part, stripping spaces and sorting keys. The client code then generates a DUMP of the JSON, which may NOT in fact be the same. It simply does not care on how the data is being passed to a server, because it assumes the server will break down things similarly to the approach used. 

* Server code, that also generates a signature, using the server-only secret (which is assumed to be the same) and also serializing the body JSON envelope part, with same approach: sorting and stripping spaces. 

### For testing

* You can change the key value, within the request-unsigned.json. 
* You can then sign this new envelope using the clientSign.js > request-signed.json
* turn on your server "API", the serverCheck.js
* Call.sh
