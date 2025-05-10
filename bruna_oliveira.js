// 1. Imprimir Números Pares
function imprimePares(n) {
    for (let i = 0; i <= n; i++) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  }
  console.log("1. Números pares até 10:");
  imprimePares(10);
  
  // 2. Soma dos Números de um Array
  function somaArray(arr) {
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
      soma += arr[i];
    }
    return soma;
  }
  console.log("2. Soma do array [1,2,3,4,5]:", somaArray([1, 2, 3, 4, 5]));
  
  // 3. Identificar Número Primo
  function ePrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  console.log("3. 7 é primo?", ePrimo(7));
  console.log("3. 10 é primo?", ePrimo(10));
  
  // 4. FizzBuzz
  function fizzBuzz() {
    console.log("4. FizzBuzz de 1 a 50:");
    for (let i = 1; i <= 50; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  }
  fizzBuzz();
  
  // 5. Contador de Vogais
  function contaVogais(str) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
      if (vogais.includes(str[i].toLowerCase())) {
        contador++;
      }
    }
    return contador;
  }
  console.log("5. Total de vogais em 'Node.js é incrível':", contaVogais("Node.js é incrível"));
  
  // 6. Tabuada de um Número
  function tabuada(n) {
    console.log(`6. Tabuada de ${n}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${n} x ${i} = ${n * i}`);
    }
  }
  tabuada(5);
  
  // 7. Inverter String
  function inverteString(str) {
    return str.split('').reverse().join('');
  }
  console.log("7. Invertido de 'hello':", inverteString("hello"));
  
  // 8. Encontre o Maior Número
  function maiorNumero(arr) {
    let maior = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maior) {
        maior = arr[i];
      }
    }
    return maior;
  }
  console.log("8. Maior número em [3, 10, 6, 2]:", maiorNumero([3, 10, 6, 2]));
  
  // 9. Palíndromo
  function ePalindromo(str) {
    const strSemEspacos = str.replace(/\s+/g, '').toLowerCase();
    const invertido = strSemEspacos.split('').reverse().join('');
    return strSemEspacos === invertido;
  }
  console.log("9. 'Ame a ema' é palíndromo?", ePalindromo("Ame a ema"));
  console.log("9. 'Olá mundo' é palíndromo?", ePalindromo("Olá mundo"));
  
  // 10. Média de Notas
  function calculaMedia(notas) {
    const media = notas.reduce((acc, curr) => acc + curr, 0) / notas.length;
    return media >= 7
      ? `Aprovado - Média: ${media.toFixed(1)}`
      : `Reprovado - Média: ${media.toFixed(1)}`;
  }
  console.log("10. Resultado para notas [8, 7, 6]:", calculaMedia([8, 7, 6]));
  console.log("10. Resultado para notas [5, 6, 4]:", calculaMedia([5, 6, 4]));
  
  // Desafio finalizado por Mirian Bruna Oliveira Gois
  
