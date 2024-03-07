import express from 'express';


//Instanciando o Servidor
const server = express();

//Configurando as rotas
server.get('/', (req, res) => {
    return res.send("Hello World");
});




//Exportando o Servidor
export {server};