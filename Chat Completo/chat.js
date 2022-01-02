const express= require('express');
const chat = express();
const http = require('http');
const morgan = require('morgan');

const server = http.createServer(chat);

//CONFIGURACION DEL SERVIDOR
chat.set("port", 3000);
chat.use(morgan())
/*LE DIGO A MI APLICACION QUE USE LOS ARCHIVOS ESTATICOS DE ESA CARPETA*/
chat.use(express.static(__dirname + "/public"));


//PRENDER SERVIDOR
server.listen(chat.get('port'), function(){
    console.log("Servidor Iniciado");
});

//ESTE ES LA LOGICA DE LOS SOCKETS
require("./sockets")(server);