const express= require('express');
const chat = express();
const http = require('http');
const server = http.createServer(chat);
const io = require('socket.io')(server);

chat.set("port", 3000);

/*LE DIGO A MI APLICACION QUE USE LOS ARCHIVOS ESTATICOS DE ESA CARPETA*/
chat.use(express.static(__dirname + "/public"));

server.listen(chat.get('port'), function(){
    console.log("Servidor Iniciado");
})

var socket = io.listen(server);

socket.on('connection', function(socket){
    console.log("Nuevo Cliente Conectado")
})