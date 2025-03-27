"use strict";

var nomes = ['leonardo', 'Yasmim', 'Bruno'];
var alunos = nomes.map(function (nome) {
  return {
    nome: nome,
    nota: Math.floor(Math.random() * 11)
  };
});
var aprovados = alunos.filter(function (alunos) {
  return alunos.nota >= 6;
});
for (var i = 0; i < aprovados.length; i++) {
  console.log("Nome: ".concat(aprovados[i].nome, " Nota:").concat(aprovados[i].nota));
}