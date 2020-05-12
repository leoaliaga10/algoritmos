function Fib(n,Arr){
  if (n > 1) {
    Arr[n] = Fib(n-1,Arr) + Fib(n-2,Arr)
  }
  return Arr[n]
}

let n=35;
var Arr=[];
Arr[0] = 0;
Arr[1] = 1;
console.log("--------------");
console.log("Fibonacci para n = " + n + " es " + Fib(n,Arr));
for (var j = 0; j <= n; j++) {
  console.log(j + ": " + Arr[j])
}