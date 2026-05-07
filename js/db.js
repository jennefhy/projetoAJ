const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('projetoaj', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
});

// AQUI ESTÁ O SEGREDO: Exportar apenas o objeto 'sequelize'
module.exports = sequelize; 

// Só depois de exportar é que você importa os modelos para sincronizar
const Register = require('./register');
const Tarefa = require('./tarefa');

sequelize.sync({ force: false })
    .then(() => console.log('Tabelas criadas!'))
    .catch(err => console.error('Erro:', err));