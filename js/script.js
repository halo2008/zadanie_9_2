function getTriangleArea(a,h){

  if (a<=0 || h<=0){
    console.log('błedna wartosc');
    return;
  }
  else if (a>0 && h>0){
    var value = (a*h)/2;
    console.log('pole trojkata ' + value)
    return;
  }
}
var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(2, 15);
var triangle3Area = getTriangleArea(3, 15);
console.log(getTriangleArea());