var num1 = 0;
var num2 = 1;
var total;

var fibonacci = function(rango){
  for(var i = 1; i <= rango/2; i++){
    num1 = num1 + num2;
    num2 = num1 + num2;
    total = num1;
    console.log(total);
    total = num2;
    console.log(total);
  }
};

fibonacci(400);
