const leftNumber = 5;
const rightNumber = 10;

function checkNumber() {
  if (rightNumber > leftNumber) {
    return true;
  } else {
    return false;
  }
}
console.log(checkNumber());
// exercice 3.1
function isBiggerThanTen() {
  if (leftNumber > 10) {
    return true;
  } else {
    return false;
  }
}
console.log(isBiggerThanTen());
// exercice 3.2
function divisibleByTwo() {
  if (leftNumber % 2 === 0 && rightNumber % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(divisibleByTwo());
// exercice 3.3
