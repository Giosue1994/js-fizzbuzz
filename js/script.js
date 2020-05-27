// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per imultipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz

// variabili js
var numero;
var message;

// calcolo i numeri da 1 a 100
for (var i = 1; i <= 100 ; i++) {
  numero = i;
  // console.log(i);

  if (numero % 15 === 0) { // quando un numero è sia multiplo di 3 che di 5, al posto del numero, stampa "FizzBuzz"
    message = 'FizzBuzz';
    numero = message;
    // console.log(numero);
  }else if (numero % 5 === 0) { // quando un numero è multiplo di 5, al posto del numero, stampa "Buzz"
    message = 'Buzz';
    numero = message;
    // console.log(numero);
  }else if (numero % 3 === 0) { // quando un numero è multiplo di 3, al posto del numero, stampa "Fizz"
    message = 'Fizz';
    numero = message;
    // console.log(numero);
  }else {
    message = numero;
    // console.log(numero);
  }

  // variabili HTML
  var elementoLista = document.getElementById('lista');
  var fizzBuzz = elementoLista.innerHTML;

  // stampo i numeri su schermo
  elementoLista.innerHTML = fizzBuzz + '<li>' + numero + '</li>';
  console.log(elementoLista.innerHTML);
}
