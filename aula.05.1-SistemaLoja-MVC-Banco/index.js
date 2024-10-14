// Importando o Express com ES6 Modules
import express from "express";
// Iniciando o Express na variável app
const app = express();
// Importando o Sequelize (com os dados da conexão)
import connection from "./config/sequelize-config.js";
// Importando os Controllers (onde estão as rotas)
import ClientesController from "./controllers/ClientesController.js";
import ProdutosController from "./controllers/ProdutosController.js";
import PedidosController from "./controllers/PedidosController.js";


// Permite capturar dados vindos de formulários
app.use(express.urlencoded({extend: false}));

// Realizando a conexão com o banco de dados
connection
  .authenticate().then(() => {
    console.log("Conexão com o banco de dados feita com sucesso!");
  })
  .catch((error) => {
    console.log(error);
  });

// Criando o banco de dados caso ele não existir
connection.query(`create database if not exists loja;`).then(() => {
    console.log("O banco de dados está criado.");
}).catch((error) => {
    console.log(error);
})
// Define o EJS como Renderizador de páginas
app.set("view engine", "ejs");
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static("public"));

// Definindo o uso das rotas dos Controllers
app.use("/", ClientesController);
app.use("/", ProdutosController);
app.use("/", PedidosController);

// Rota Principal
app.get("/", function (req, res) {
  res.render("index");
});

// Inicia o servidor na rota 8080
const port = 3000;
app.listen(port, (error) => {
  if (error) {
    console.log(`Erro ao iniciar o servidor: ${error}.`);
  } else {
    console.log(`Servidor rodando em http://localhost:${port}`);
  }
});
