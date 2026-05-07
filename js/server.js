const express = require('express');
const cors = require('cors');
const Register = require('./register'); // Mudamos de './js/register' para './register'

const app = express();
app.use(cors());
app.use(express.json());


// Rota para salvar um novo usuário
app.post('/cadastrar', async (req, res) => {
    try {
        const usuario = await Register.create(req.body);
        res.status(201).json({ mensagem: "Cadastro realizado!", usuario });
    } catch (error) {
        res.status(400).json({ erro: "Erro ao cadastrar: " + error.message });
    }
});

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));

// Rota para realizar o Login
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Procura o usuário pelo nome no banco
        const usuario = await Register.findOne({ 
            where: { nome_do_usuario: username } 
        });

        if (!usuario) {
            return res.status(404).json({ erro: "Usuário não encontrado!" });
        }

        // Verifica se a senha bate (comparação simples)
        if (usuario.senha === password) {
            res.status(200).json({ mensagem: "Login realizado com sucesso!", usuario });
        } else {
            res.status(401).json({ erro: "Senha incorreta!" });
        }
    } catch (error) {
        res.status(500).json({ erro: "Erro no servidor: " + error.message });
    }
});

// Rota para cadastrar um novo equipamento/produto
app.post('/cadastrar-produto', async (req, res) => {
    try {
        // Supondo que as colunas na tabela 'tarefas' sejam adaptadas
        const novoProduto = await Tarefa.create(req.body); 
        res.status(201).json({ mensagem: "Equipamento cadastrado com sucesso!", novoProduto });
    } catch (error) {
        res.status(400).json({ erro: "Erro ao cadastrar produto: " + error.message });
    }
});