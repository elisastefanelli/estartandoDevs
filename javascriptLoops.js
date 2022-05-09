// // Criar um script que calcula a média (e adiciona ao objeto) a partir de um array de notas e de console.log seguindo o padrão: "Fulano(a) teve média 8".
// Entrada (uma array de objetos):

const alunos = [
  { nome: 'Joao', notas: [5, 7.5, 8, 8, 4.5, 9] },
  { nome: 'Breno', notas: [10, 8.5, 10, 7.5, 9, 6.5] },
  { nome: 'Pedro', notas: [5.5, 8.3, 9.5, 8, 9, 6.9] },
  { nome: 'Fulano', notas: [5.9, 8.5, 4, 8, 9.5, 6] },
  { nome: 'Angelino', notas: [0, 4.8, 9.2, 8.5, 4.9, 6.1] },
  { nome: 'Jaja', notas: [10, 4.3, 6.8, 8.25, 9.4, 6] },
  { nome: 'Frederico', notas: [3.5, 8, 10, 8.5, 9, 3.8] },
  { nome: 'Jonatas', notas: [6, 8.5, 8, 6.5, 7, 10] },
  { nome: 'Henrique', notas: [4, 8.2, 5.5, 8.5, 5.4, 6] }
];
function media(nomeDoAluno) {
  let mediaDoAluno = nomeDoAluno.notas.reduce((soma, nota) => soma + nota) / 6;
  return {
    nome: nomeDoAluno.nome,
    notas: nomeDoAluno.notas,
    media: mediaDoAluno.toFixed(1)
  };
}

const alunosComMedias = alunos.map(media);
// console.log(alunosComMedias);

alunosComMedias.forEach(aluno => {
  if (aluno.media > 6) {
    console.log(
      `O aluno ${aluno.nome} teve média ${aluno.media} e foi aprovado.`
    );
  } else {
    console.log(
      `O aluno ${aluno.nome} teve média ${aluno.media} e foi reprovado.`
    );
  }
});

// Saida:
// [
// { nome: 'Joao', notas: [5, 7.5, 8, 8, 4.5, 9], media: 7.0 },
// { nome: 'Breno', notas: [10, 8.5, 10, 7.5, 9, 6.5], media: 8.6 },
// { nome: 'Pedro', notas: [5.5, 8.3, 9.5, 8, 9, 6.9], media: 7.9 },
// { nome: 'Fulano', notas: [5.9, 8.5, 4, 8, 9.5, 6], media: 7.0 },
// { nome: 'Angelino', notas: [0, 4.8, 9.2, 8.5, 4.9, 6.1], media: 5.6 },
// { nome: 'Jaja', notas: [10, 4.3, 6.8, 8.25, 9.4, 6], media: 7.5 },
// { nome: 'Frederico', notas: [3.5, 8, 10, 8.5, 9, 3.8], media: 7.1 },
// { nome: 'Jonatas', notas: [6, 8.5, 8, 6.5, 7, 10], media: 7.7 },
// { nome: 'Henrique', notas: [4, 8.2, 5.5, 8.5, 5.4, 6], media: 6.3 }
// ]
