import express from "express";
const router = express.Router();

<<<<<<< HEAD
// Importando o Model Cliente
import Cliente from "../models/Cliente.js";

// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  Cliente.findAll().then((clientes) => {
    res.render("clientes", {
      clientes: clientes,
    });
  });
});

// Rota de cadastros de clientes
router.post("/clientes/new", (req, res) => {
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  Cliente.create({
    nome: nome,
    cpf: cpf,
    endereco: endereco,
  }).then(() => {
    res.redirect("/clientes");
  });
});

// Rota de exclusão de dados da tabela cliente
// Essa rota possui um parâmetro ID
router.get("/clientes/delete/:id", (req, res) => {
  // Coletar o ID que veio na URL
  const id = req.params.id;
  // Método para excluir
  Cliente.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(error);
    });
});

// Rota de edição de dados da tabela cliente
router.get("/clientes/edit/:id", (req, res) => {
  const id = req.params.id;
  Cliente.findByPk(id)
    .then((cliente) => {
      res.render("clienteEdit", {
        cliente: cliente,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

// Rota de alteração de dados da tabela cliente
router.post("/clientes/update", (req, res) => {
  const id = req.body.id;
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  Cliente.update(
    {
      nome: nome,
      cpf: cpf,
      endereco: endereco,
    },
    { where: { id: id } 
    })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(error);
    });
=======
// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  const clientes = [
    {
      nome: "Ana Silva",
      cpf: "123.456.789-00",
      endereco:
        "Rua das Flores, 123, Bairro Jardim Primavera, Cidade Felicidade, Estado do Sonho, CEP: 12345-678",
    },
    {
      nome: "Pedro Almeida",
      cpf: "987.654.321-00",
      endereco: "Avenida Central, 456, Bairro Centro, Cidade Nova, Estado da Esperança, CEP: 98765-432",
    },
    {
      nome: "Marina Oliveira",
      cpf: "456.789.123-00",
      endereco: "Travessa dos Sonhos, 789, Bairro Vista Linda, Cidade Sol Nascente, Estado da Harmonia, CEP: 54321-987",
    },
    {
      nome: "Rafael Santos",
      cpf: "321.654.987-00",
      endereco: "Praça da Amizade, 321, Bairro Bela Vista, Cidade Alegria, Estado da Serenidade, CEP: 87654-321",
    },
  ];
  res.render("clientes", {
    clientes: clientes,
  });
>>>>>>> ff7413f4cc559fc882bd556d8ba348b8d4799cb6
});

export default router;
