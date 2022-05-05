// exercício 1
function inverter(palavra) {
  const numeroDeLetras = palavra.length;
  let palavraInvertida = [];
  palavra = palavra.split('');
  for (let i = 0; i < numeroDeLetras; i++) {
    palavraInvertida.push(palavra.pop());
  }
  return palavraInvertida.join('');
}

console.log(inverter('elisa'));

// exercício 2
function contarNumeroVogais(palavra) {
  const vogais = ['a', 'e', 'i', 'o', 'u'];
  let numeroDeVogais = 0;
  for (let i = 0; i < palavra.length; i++) {
    if (vogais.includes(palavra[i].toLowerCase())) {
      numeroDeVogais++;
    }
  }
  return numeroDeVogais;
}
console.log(contarNumeroVogais('Elisa'));

// Extra 1 e 2
const fazerRelatorio = palavra => {
  if (typeof palavra != 'string') {
    console.log('oh carai');
    return undefined;
  }
  const objeto = {
    palavra: palavra,
    palavraInverso: inverter(palavra),
    numeroVogais: contarNumeroVogais(palavra)
  };
  return objeto;
};
console.log(fazerRelatorio('Elisa'));
