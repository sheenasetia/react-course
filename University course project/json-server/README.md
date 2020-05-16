# Setting up a Server using json-server
The Node module, json-server, provides a very simple way to set up a web server that supports a full-fledged REST API server. It can also serve up static web content from a folder.

## Installing json-server
json-server is a node module, and hence can be installed globally by typing the following at the command prompt:
*  npm install json-server -g

## Configuring the Server

Move to json-server folder in your terminal window, and type the following at the command prompt to start the server:

* json-server --watch db.json -p 3001 -d 2000

This should start up a server at port number 3001 on your machine. The data from this server can be accessed by typing the following addresses into your browser address bar:
* http://localhost:3001/dishes
* http://localhost:3001/promotions
* http://localhost:3001/leaders
* http://localhost:3001/feedback

Type these addresses into the browser address and see the JSON data being served up by the server. 
This data is obtained from the db.json file.

The json-server also provides a static web server. Any resources that you put in a folder named public in the json-server folder above, will be served by the server at the following address:
* http://localhost:3001/

Shut down the server by typing ctrl-C in the terminal window.

## Serving up the Images
Images folder containing the images to the public folder.
* http://localhost:3001/images/<image name>.png

