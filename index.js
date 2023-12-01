const numeros = [1, 2, 3, 4];

function multiplicaPorDez(numero) {
    return numero * 10; 
}

const soma = numeros.map(multiplicaPorDez);

console.log(soma);