async function register() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;

    if (password !== passwordConfirm) {
        alert("As senhas não coincidem!");
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/cadastrar', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nome_do_usuario: username,
                email: email,
                senha: password,
                repita_a_senha: passwordConfirm
            })
        });

        if (response.ok) {
            alert("Cadastro realizado!");
            window.location.href = "login.html";
        } else {
            alert("Erro no cadastro.");
        }
    } catch (error) {
        alert("Servidor desligado! Rode 'node js/server.js'");
    }
    
}