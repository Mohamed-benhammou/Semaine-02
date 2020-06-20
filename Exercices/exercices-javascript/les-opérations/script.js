function multiplication(a) {
  return a * a;
}
console.log(multiplication(2));
console.log(multiplication(4));
console.log(multiplication(8));
console.log(multiplication(16));
// exercice 2.1
function division(b) {
  return b / 2;
}
console.log(division(3));
console.log(division(178));
console.log(division(65));
console.log(division(98));
console.log(division(123));
// exercice 2.2
function calculePrice(priceIkeaLamp) {
  const reduction = priceIkeaLamp * 0.19;
  return priceIkeaLamp - reduction;
}
console.log(calculePrice(79.99));
// exercice 2.3
let firstNumber = 9;
let secondNumber = 8;
let thirdNumber = 4;
let fourthNumber = 12;
// Exercice incrémentation
function incrementOnClick() {
  document
    .getElementById('increment')
    .addEventListener('click', function decrement() {
      // Insérez ici le bout de code nécessaire à la réalisation de l'exercice sur la décrémentation, nous verrons plus tard à quoi ces lignes pré-existantes correspondent
      let incrementCounter = 0;

      console.log('Incrémentez');
    });
}
// Exercice incrémentation
function decrementOnClick() {
  document
    .getElementById('decrement')
    .addEventListener('click', function increment() {
      // Insérez ici le bout de code nécessaire à la réalisation de l'exercice sur la décrémentation, nous verrons plus tard à quoi ces lignes pré-existantes correspondent
      let decrementCounter = 100;

      console.log('Décrémentez');
    });
}
