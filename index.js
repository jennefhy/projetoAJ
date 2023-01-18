const express = require('express');
const server = express();
const path = require('path');

(async() =>{
    const database = require('./db');
    const Perfil = require('./modelos/perfil');
    const Login = require('./modelos/login');
    const Tarefa = require('./modelos/tarefa');
    const Register = require('./modelos/register');


    try{
        const resultado = await database.sync();
        console.log(resultado);

        const resultadoCreate = await Perfil.create({
            nome: 'jennefhy',
            sobrenome: 'saiury',
            telefone: '99999999',
            bairro: 'bairro teste',
            rua: 'rua teste',
            cep: '5900000',
            estado: 'PB',
            email: 'jennefhy.saiury@gmail.com',
            pais: 'BRASIL',
            login: 'jennefhy',
            senha: '123456789'
        })

        const resultadoCreate2 = await Login.create({
            usuario: 'jennefhy',
            senha: '123456789'
        })

        const resultadoCreate3 = await Tarefa.create({
            eletronicos: 'todos',
            hardware: 'monitor',
            computadores: 'dell',
            perifericos: 'teclado'

        })

        const resultadoCreate4 = await Register.create({
            nome_do_usuario: 'jennefhy',
            email: 'jennefhy.saiury@gmail.com',
            senha: '123456789',
            repita_a_senha: '123456789'
        })

        console.log(resultadoCreate);
        console.log(resultadoCreate2);
        console.log(resultadoCreate3);
        console.log(resultadoCreate4);

    } catch(error){
        console.log(error);
    }
})();



server.get('/perfil', (req, res)=>{
    res.sendFile(path.join(__dirname+'/pages/perfil.html'));
})

server.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname+'/pages/index3.html'));
})

server.get('/tarefa', (req, res)=>{
    res.sendFile(path.join(__dirname+'/pages/tarefa.html'));
})

server.get('/register', (req, res)=>{
    res.sendFile(path.join(__dirname+'/pages/register.html'));
})

server.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname+'/pages/login.html'));
})

server.listen(3000);