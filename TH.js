function removeItemFromArr ( arr, indice ) {
    //var i = arr.indexOf( item );
    if ( indice !== -1 ) {
        arr.splice( indice, 1 );
    }
}
function md (origen,destino){
	let m = origen.length
	let n = destino.length
	destino[n] = origen[m-1] // -1 porque los arrays en js inician en 0
	removeItemFromArr (origen, m-1 ) // -1 porque los arrays en js inician en 0
	l = l + 1
}
function mt (h,origen,destino,intermedio) {
	if (h >= 1){
		mt (h-1,origen,intermedio,destino)
		md (origen,destino)
		mt (h-1,intermedio,destino,origen)
	}
}
//var origen = [10,9,8,7,6,5,4,3 ,2, 1];
var origen = [30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3 ,2, 1];
var intermedio=[];
var destino=[];
var l = 0;
console.log("Torre Origen: " + origen);
var h=origen.length;
//console.log(h);
mt(h,origen,destino,intermedio)
console.log("Torre Origen: " + origen);
console.log("Torre Intermedio: " + intermedio);
console.log("Torre Destino: " + destino);
console.log("Numero de llamados: " + l);