async function login() {
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: user,
                password: pass
            })
        });

        const result = await response.json();

        if (response.ok) {
            alert("✅ Bem-vindo(a), " + user + "!");
            // Redireciona para a página principal do seu projeto
            window.location.href = "index.html"; 
        } else {
            alert("❌ " + result.erro);
        }
    } catch (error) {
        alert("Erro ao conectar com o servidor!");
    }
}