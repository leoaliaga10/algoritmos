//P(X) = 4X^4 + 7X^3 + 3X^2 + 6X + 2
			//n
//P(X) = SUMATORIA (Ak*X^k)
		   //k=0
//		= A0+X(A1+X(A2+...+X(An-1+XAn)...))
//		  Ak+(X*y)
//0 paso: (4+(8*0)) = 4 siempre es igual a An para la formula matematica no es necesaria
//1 paso: (7+(8*4))= 39
//2 paso: (3+(8*39))= 315
//3 paso: (6+(8*4))= 2526
//4 paso: (2+(8*4))= 20210
function CalHorne(arrC,X){
	var y = 0;
	for (var i = arrC.length - 1; i >= 0 ; i--) {
		y = arrC[i] + y * X ;	}
	return y;
}
function invertir(arrC){
//cambiamos el orden del polinomio
	arrC = arrC.reverse(); 
}
function forma(arrC){
	let Cadena = arrC[0] + "X^" + (arrC.length - 1);
	for (var i = 1; i < arrC.length; i++) {
		Cadena = Cadena + " + " + arrC[i] + "X^" + (arrC.length - i - 1);
	}
	return Cadena;
}
let X = 8;
arrC =[4,7,3,6,2];
console.log("Polinomio descendente: " + arrC);
var varForma = forma(arrC)
console.log(varForma);
invertir(arrC);
console.log("Polinomio ascendente: " + arrC);
console.log("Valor X: " + X);
console.log(CalHorne(arrC,X));