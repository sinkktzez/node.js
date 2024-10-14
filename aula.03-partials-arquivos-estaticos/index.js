// Importando o Express pra nossa aplicação
// npx (executar pacotes)
// npm start (abreviação do npx nodemon index.js que roda o projeto)
const express = require("express"); //CommonJS Modules
// Criando uma instância do express
const app = express();

// Definindo ejs como renderizador de páginas
app.set("view engine", "ejs");

// Definir Pasta dos arquivos estáticos
app.use(express.static("public"));

// Criando a rota principal
app.get("/", (req, res) => {
  //res.send enviar mensagem na principal
  // res.send("<h1>Hello world!</h1><br><hr>");
  //rend.render renderizar a página index.ejs que está na pasta 'views'
  res.render("index");
});

// Rota de perfil
//: dois pontos representa entrada de parametro
//:nome é um parâmetro obrigatório
//:nome? é um parâmetro opcional
app.get("/perfil/:nome?", (req, res) => {
  //coletando o parâmetro e guardando na variável
  const listaNomes = ["Sergio", "José", "Afonso", "Fabiano"];
  const nome = req.params.nome;
  res.render("perfil", {
    nome: nome,
    listaNomes: listaNomes,
  });
});

//ROTA DE VÍDEOS
//:playlist? e :video? parametros opcionais
app.get("/videos/:playlist?/:video?", (req, res) => {
  const listaPlaylist = {
    "Receitas": "Coxinha",
    "Músicas": "The Summoning - Sleep Token",
    "Gameplays": "Deadlock",
    "Programação": "HTML5"
    };
    const playlist = req.params.playlist;
    const video = playlist ? listaPlaylist[playlist] : null;
    res.render("videos", {
      listaPlaylist: listaPlaylist,
      playlist: playlist,
      video: video,
    });
});

// Rota de produtos
app.get("/produtos/:produto?", (req, res) => {
  const listaProdutos = ["PC", "Tablet", "Notebook", "Celular", "Monitor"];
  const produto = req.params.produto;
  res.render("produtos", {
    // Enviando variável para a página
    //V será chamado na página
    produto: produto, //< variável que na index (req.params)
    listaProdutos: listaProdutos,
    //Na página produtos.ejs haverá uma testagem de condição
  });
});

//Rota de pedidos
app.get("/pedidos", (req, res) => {
  const pedidos = [
    { produto: "Celular", valor: 3000 },
    { produto: "Computador", valor: 4000 },
    { produto: "Tablet", valor: 2000 },
    { produto: "Notebook", valor: 3800 },
  ];
  res.render("pedidos", {
    pedidos: pedidos,
  });
});

//iniciando o servidor na porta 8080
const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log(`Ocorreu um erro: ${error}`);
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}.`);
  }
});
