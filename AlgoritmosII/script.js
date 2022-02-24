// Exemplo com função fatorial - Aula de algoritmos II

function fatorial(numero) {
  if (numero == 1) return 1;
  return numero * fatorial(numero - 1);
}

let x = fatorial(5);
console.log(x);