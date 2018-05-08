var num1 = 1;
var num2 = 2;
var total;

var fibonacci = function(rango){
  for(var i = 1; i <= rango/2; i++){
    console.log(num1);
    console.log(num2);
    num1 = num1 + num2;
    num2 = num2 + num1;
  }
};

fibonacci(10);
