// Importando o Express pra nossa aplicação
// npx (executar pacotes)
// npm start (abreviação do npx nodemon index.js que roda o projeto)
//const express = require("express"); // CommonJS Modules
import express from "express"; // ES6 Modules
// Criando uma instância do express
const app = express();

// Importando os Controllers (onde estão rotas)
import ClientesController from "./controllers/ClientesController.js";

// Definindo ejs como renderizador de páginas
app.set("view engine", "ejs");

// Definir Pasta dos arquivos estáticos
app.use(express.static("public"));

// Definindo o uso das rotas que estão nos Controllers
app.use("/", ClientesController);

// Criando a rota principal
app.get("/", (req, res) => {
  //res.send enviar mensagem na principal
  //res.send("<h1>Hello world!</h1><br><hr>");
  //rend.render renderizar a página index.ejs que está na pasta 'views'
  res.render("index");
});

// Iniciando o servidor na porta 8080
const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}.`);
  }
});
