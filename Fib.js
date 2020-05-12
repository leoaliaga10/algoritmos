function Fibonacci (n){
	if (n>1){
		n = Fibonacci (n-1) + Fibonacci (n-2)
	}
	return n
}

n = 10;
for (var i = 0; i <= n; i++) {
	console.log(i +"  " + Fibonacci (i));
}

