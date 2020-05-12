function Fib(n){

	for (var i = 0; i <= n; i++) {
		FibTab[i] = -1
	}
	FibTab[0] = 0
	FibTab[1] = 1
	return LookUpFib(FibTab,n)
}
function LookUpFib(FibTab,n){
	if (FibTab[n] != -1) {
		return FibTab[n]
	}
	FibTab[n] = LookUpFib(FibTab,n-1) + LookUpFib(FibTab,n-2)
	return FibTab[n]
}

let n=35;
var FibTab=[];
console.log("--------------");
console.log("Fibonacci para n = " + n + " es " + Fib(n));
for (var j = 0; j <= n; j++) {
  console.log(j + ": " + FibTab[j])
}