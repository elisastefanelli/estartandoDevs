// exercício 1
const pessoa = {
  nome: 'Maria',
  idade: 18
};
if (pessoa.idade >= 18) {
  console.log(
    pessoa.nome + ' tem ' + pessoa.idade + ' anos e é maior de idade'
  );
} else {
  console.log(
    pessoa.nome + ' tem ' + pessoa.idade + ' anos e é menor de idade'
  );
}

// exercício 2
const funcionario = {
  nome: 'Renan',
  salario: 2800.5
};
funcionario.salario += funcionario.salario * 0.18;
if (funcionario.salario > 3000.0) {
  console.log(
    funcionario.nome +
      ' recebe R$ ' +
      funcionario.salario +
      ' e deve declarar imposto.'
  );
} else {
  console.log(
    funcionario.nome +
      ' recebe R$ ' +
      funcionario.salario +
      ' e não precisa declarar imposto.'
  );
}

// exercício 3
const aluno = {
  nome: 'Elisa',
  nota1: 8.5,
  nota2: 7.5,
  nota3: 5.9
};
const media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;
if (media >= 8) {
  console.log(aluno.nome + ' obteve a média ' + media + ' e foi aprovado.');
} else {
  console.log(aluno.nome + ' obteve a média ' + media + ' e não foi aprovado.');
}
console.log(aluno);
