var sum = 1;
function FirstFactorial(num) { 
     for(var i = 1; i <= num; i++){
        sum = sum * i;
    }
  num = sum;
  return num;   
}
FirstFactorial();                            
