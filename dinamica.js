var U = new Array(3);
U[0] = new Array(3);
U[1] = new Array(3);
U[2] = new Array(3);

var R = new Array(4);
R[0] = new Array(4);
R[1] = new Array(4);
R[2] = new Array(4);
R[3] = new Array(4);

var S = new Array(4);
S[0] = new Array(4);
S[1] = new Array(4);
S[2] = new Array(4);
S[3] = new Array(4);


U[0][0] = 0;
U[0][1] = 3;
U[0][2] = 8;
U[1][0] = 0;
U[1][1] = 4;
U[1][2] = 5;
U[2][0] = 0;
U[2][1] = 5;
U[2][2] = 7;

R[0][0] = 0;
R[0][1] = 0;
R[0][2] = 0;
R[0][3] = 0;
R[1][0] = 0;
R[1][1] = 0;
R[1][2] = 0;
R[1][3] = 0;
R[2][0] = 0;
R[2][1] = 0;
R[2][2] = 0;
R[2][3] = 0;
R[3][0] = 0;
R[3][1] = 0;
R[3][2] = 0;
R[3][3] = 0;

var temp; 
var indice_anterior;
var indice;
var c = 1;
var n = 3;
for (var i = (n - 1); i >= 0; i--) {
	console.log("Tarea: " + (i + 1));

	for (var j = 0; j <= n; j++) {
		temp = -100;
		for (var k = 0; k <= (n - 1); k++) {
			if(k <= j){
				indice_anterior = j - k;
				if(temp <= (U[i][k] + R[indice_anterior][c-1])){
					temp = (U[i][k] + R[indice_anterior][c-1]);
					//console.log(U[i][k] +" + "+ indice_anterior + ",0 = " + R[indice_anterior][0])
					//console.log(U[i][k] + " + " + R[indice_anterior][0] +" = " + temp )
					indice = k;
				}
			}
		}
		console.log("TEMP: " + temp)
		//console.log("Indice: " + indice)
	R[j][c] = temp;
	S[j][c] = indice;
	//R[j][0] = indice; //en la columna 0 se optiene el resultado del N° personas en la tarea 3 para  
	}
	//console.log(R)
	c = c + 1;
}
console.log("Matriz Resultado Optimizado")
console.log(R)
console.log("Matriz Resultado Personas")
console.log(S)
