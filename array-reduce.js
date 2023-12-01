const notas = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const soma = notas.reduce((anterior, atual) => {
    return anterior + atual;
});

console.log(soma);