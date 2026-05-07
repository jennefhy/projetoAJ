const Sequelize = require('sequelize');
const database = require('./db');

// 1. CONFIRA ESTE NOME AQUI (deve ser Register com 'R' maiúsculo)
const Register = database.define('register', { 
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome_do_usuario: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
    },
    repita_a_senha: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// 2. O NOME AQUI DEVE SER IGUAL AO LÁ DE CIMA
module.exports = Register;