const Sequelize = require('sequelize');
const database = require("./db");

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
})

module.exports = Register;