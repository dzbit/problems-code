console.log("corriendo ..");

//
var cont = 0;
var multiplos = function(rango, num1, num2){
  for(var i = 0; i <= rango; i++){
    if((i % num1) === 0){ 
      cont = cont + i;
    }
    if((i % num2) === 0){
      cont = cont + i;
    }
  }
  document.write(cont);
}
multiplos(1000, 3, 5);
