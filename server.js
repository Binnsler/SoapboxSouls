var express = require( "express" );
var app = express();
var http = require( "http" );
var path = require( "path" );
var port;
var server;

app.get( "*", function appGet( req, res ){
    res.sendFile( path.resolve( "./index.html" ) );
} );

server = http.createServer( app );
server.listen( process.env.port || 3030, function serverListen(){
    /* eslint-disable no-console */
    console.log( "Listening on porto: ", port );
} );
