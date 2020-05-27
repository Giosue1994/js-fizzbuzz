// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per imultipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.ù

// variabili js
var numero;
var messaggio;

// calcolo i numeri da 1 a 100
for (var i = 1; i <= 100 ; i++) {
  numero = i;
  // stampo i numeri su schermo
  // console.log(i);

  // quando un numero è multiplo di 3, al posto del numero, stampa "Fizz"
  if (numero % 15 === 0) {
    numero = 'FizzBuzz';
    console.log(numero);
  }else if (numero % 5 === 0) {
    numero ='Buzz';
    console.log(numero);
  }else if (numero % 3 === 0) {
    numero = 'Fizz';
    console.log(numero);
  }else {
    numero;
    console.log(numero);
  }
  // quando un numero è multiplo di 5, al posto del numero, stampa "Buzz"

  // quando un numero è sia multiplo di 3 che di 5, al posto del numero, stampa "FizzBuzz"
}
