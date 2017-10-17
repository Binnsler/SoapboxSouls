var express = require( "express" );
var app = express();
var http = require( "http" );
var path = require( "path" );
var port;
var server;

var port = $PORT || 3030;

app.get( "*", function appGet( req, res ){
    res.sendFile( path.resolve( "./index.html" ) );
} );

server = http.createServer( app );
server.listen( port, function serverListen(){
    /* eslint-disable no-console */
    console.log( "Listening on porto: ", port );
} );
