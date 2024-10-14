// Importando o Sequelize
import Sequelize from "sequelize";

// Criando os dados de conexão com o banco de dados
const connection = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
<<<<<<< HEAD
    password: '', // Alunos deixam a senha em branco
    database: 'sistemaLoja', // Comente essa linha na primeira execução da aplicação
=======
    password: '', // Alunos deixem a senha em branco
    // Comente essa linha na primeira execução da aplicação
    //database: 'loja',
>>>>>>> ff7413f4cc559fc882bd556d8ba348b8d4799cb6
    timezone: '-03:00'
})
export default connection;