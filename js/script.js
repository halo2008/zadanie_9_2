var a = prompt('podaj wartosc a'),
    b = prompt('podaj wartosc b'),
    value = (a * a) + (2 * a * b) - (b * b);
//alert ('wynik ' + value);
console.log('wynik operacji ' + value);
if (value > 0) {
  console.log('wynik dodatni');
} else if (value < 0) {
  console.log('wynik ujemny');
} else {
  console.log('wynik rowny zero');
} 