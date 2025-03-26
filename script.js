    // Função assíncrona para buscar e exibir os dados do perfil do GitHub
    async function carregarPerfil() {
        // Nome de usuário do GitHub que vamos buscar
        const username = 'LeonardoPereira003';
    
        try {
        // Faz a requisição para a API pública do GitHub usando fetch
        const resposta = await fetch(`https://api.github.com/users/${username}`);
    
        // Verifica se a resposta deu erro (status diferente de 200~299)
        if (!resposta.ok) throw new Error('Erro ao buscar usuário');
    
        // Converte o resultado da requisição em JSON (dados legíveis no JS)
        const perfil = await resposta.json();
    
        // Atualiza a imagem de avatar no HTML usando o valor da API
        document.getElementById('avatar').src = perfil.avatar_url;
    
        // Atualiza o nome do usuário (pode ser nome real)
        document.getElementById('name').textContent = perfil.name;
    
        // Atualiza o login do GitHub (com @ na frente)
        document.getElementById('username').textContent = '@' + perfil.login;
    
        // Atualiza o número de repositórios públicos
        document.getElementById('repos').textContent = perfil.public_repos;
    
        // Atualiza o número de seguidores
        document.getElementById('followers').textContent = perfil.followers;
    
        // Atualiza o número de pessoas que ele segue
        document.getElementById('following').textContent = perfil.following;
    
        // Atualiza o link para o perfil do GitHub
        document.getElementById('link').href = perfil.html_url;
    
        } catch (erro) {
        // Se algum erro acontecer (ex: rede, usuário inválido...), ele cai aqui
        console.error('Erro ao carregar perfil:', erro);
    
        // Mostra uma mensagem para o usuário (pode customizar)
        alert('Não foi possível carregar os dados do GitHub.');
        }
    }
    
    // Chama a função quando a página carregar
    carregarPerfil();
    