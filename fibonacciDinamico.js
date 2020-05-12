function FibDinamico(n){
  if (n ==0) {
    return 0;
  }
  else if(n == 1){
    return 1;
  }
  else{
    tabla[0] = 0;
    tabla[1] = 1;
    for (var i = 2; i <= n; i++) {
      tabla[i] = tabla[i-1] + tabla[i-2];
    }
  }
  return tabla[n]
}

let n=35
var tabla=[];
console.log("--------------");
console.log("Fibonacci para n = " + n + " es " + FibDinamico(n));
for (var j = 0; j <= n; j++) {
  console.log(j + ": " + tabla[j])
}



