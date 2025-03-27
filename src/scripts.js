// Array simples contendo apenas os nomes dos alunos
const nomes = ['leonardo', 'Yasmim', 'Bruno'];

// Usando .map() para transformar os nomes em objetos com nome e uma nota aleatória de 0 a 10
const alunos = nomes.map(function(nome) {
    return {
        nome: nome, // pega o nome atual do array nomes
        nota: Math.floor(Math.random() * 11) // gera uma nota aleatória inteira de 0 a 10
    };
});

// Usando .filter() para selecionar apenas os alunos com nota maior ou igual a 6
const aprovados = alunos.filter(aluno => aluno.nota >= 6);

// Laço for para percorrer o array de aprovados e exibir no console o nome e a nota
for (let i = 0; i < aprovados.length; i++) {
    console.log(`Nome: ${aprovados[i].nome} Nota:${aprovados[i].nota}`);
}
