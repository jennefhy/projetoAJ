const Sequelize = require('sequelize');
const database = require("./db");

const Tarefa = database.define('tarefa', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    eletronicos: {
        type: Sequelize.STRING,
        allowNull: false
    },
    hardware: {
        type: Sequelize.STRING,
        allowNull: false
    },
    computadores: {
        type: Sequelize.STRING,
        allowNull: false
    },
    perifericos: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Tarefa;