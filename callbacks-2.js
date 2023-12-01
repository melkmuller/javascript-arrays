const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function saudacao(nome) {
    console.log(`Olá, ${nome}`);
    rl.close();
}

rl.question('Qual é o seu nome? ', saudacao);