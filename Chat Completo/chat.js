const express = require("express");
const chat = express();

chat.get("/", function(req, res){
    res.end("Chat Iniciado");
})

chat.listen(3000, function(){
    console.log("Servidor Iniciado");
})