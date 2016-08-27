## Technote: Handling Simple client-server Authenticated API call   

This is a repo-technote, which is aimed to explain a very basic architecture, alongside with a basic implementation, for a system of client and server software that exchanges data and attemps to establish an authenticated request. 

### Secret and key value note 

Notice that both, the JS client and the JS server counterpart, have the secret key which is kept within the code. This is fine because the main point here is that the secret component is not passed through the network (when curl calls the server). 

However, you will notice that a key is being passed in the JSON envelope and not being used. This is left there simply because, in a real world, is should the a key that is going to help you locate the secret counterpart, using an associative array structure or a database. 

### Envelope

Notice that the actual content, which is being checked on its validity, is the content of the envelope inner JSON.

### JSON strictness and more

Notice that this only will work if you assume that the envelope part of the JSON is strictly the same; while you have to acknowledge that JSON implementations may use various encoding for JSON. 

With this, you have to be aware that the signature generation depends on a sorting and compression specification on both sides, client and server. So what we have on each end is: 

* Client code, that generates a signature, using secret, using a string serialization of the JSON envelope part, stripping spaces and sorting keys. The client code then generates a DUMP of the JSON, which may NOT in fact be the same. It simply does not care on how the data is being passed to a server, because it assumes the server will break down things similarly to the approach used. 

* Server code, that also generates a signature, using the server-only secret (which is assumed to be the same) and also serializing the body JSON envelope part, with same approach: sorting and stripping spaces. 

## Testing

Now you can get to work the full flow. First we will sign the JSON. Second you will run the server to listen. Then you will perform a curl command, to call the server passing the JSON, then you will notice the server to display the results: both signatures the client and the server-based one. Therefore, the idea is that you can visually see that the server found the same key if things works as expected. 


### Run the server

```
node serverCheck.js
```

### Sign the JSON

```
node clientSign.js request-unsigned.json > request-signed.json
```

### Make a call

```
./call.sh
```

### Contribute with thoughts

Just send your notes to me or patches

