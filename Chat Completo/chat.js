const express = require("express");
const chat = express();

/*LE DIGO A MI APLICACION QUE USE LOS ARCHIVOS ESTATICOS DE ESA CARPETA*/
chat.use(express.static(__dirname + "/public"));

chat.listen(3000, function(){
    console.log("Servidor Iniciado");
})