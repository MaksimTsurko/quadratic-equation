module.exports = function solveEquation(equation) {
   var str = equation.split(" ");
   var a = str[0],b = str[3]+str[4],c =str[7]+str[8], result =[];
   var D = Math.round((b*b) - (4*a*c));
  var x1=Math.round((-b)+Math.sqrt(D))/(2*a), x2 = Math.round((-b)-Math.sqrt(D))/(2*a);
  x2>x1? result = [x1,x2]: result = [x2,x1];
  return result;
  // your implementation
}
