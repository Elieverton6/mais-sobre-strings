const nome = prompt("Digite seu nome completo:");

// Retorna o nome que eu digitei no body da página.

document.body.innerHTML += `Seu nome é: <strong>${nome}</strong> <br />`;


// Retorna o comprimento do nome na página, length: comprimento (largura).

document.body.innerHTML += `Seu nome tem <strong>${nome.length}</strong> letras <br />`;


// Basicamente estamos acessando o caractere/indice 1 da minha string.

document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome[1]}</strong> <br />`; 


// Retorna em números a posição de um caractere ou palavra.

document.body.innerHTML += `Qual o primeiro índice da letra E no seu nome? <strong>${nome.indexOf('')}</strong> <br />`; // Se deixarmos vazio ele retorna a primeira letra, ou seja o indice 0.


// A propriedade lastIndexOf busca o ultimo caractere ou palavra.

document.body.innerHTML += `Qual o último índice da letra N no seu nome? <strong>${nome.lastIndexOf('')}</strong> <br />`; //  Se deixarmos vazio ele retorna a ultima letra, ou seja o indice final.


// O método slice(), por outro lado, retorna os caracteres entre dois números de índice. O primeiro parâmetro será o número de índice de início, e o segundo parâmetro será o número de índice final.

document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nome.slice(-3)}</strong> <br />`; // Se deixarmos -3 ele retorna as 3 ultimas letras da palavra.


// O método split('') é utilizado para dividir uma string em um array de substrings, onde cada substring é um caractere da string original. Exem: "O","l","á".

document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}</strong> <br />`; // Percebe-se que eu coloquei espaço dentro do split, ou seja quando houver um texto que contem espaço ele vai me retorna assim: "nome","sobrenome".


// A propriedade toUpperCase faz todo o texto ficar maiuscula.

document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong> <br />`;


// A propriedade toLowerCase faz todo o texto ficar minusculo.

document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLowerCase()}</strong> <br />`;