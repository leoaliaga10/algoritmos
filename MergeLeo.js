//// compara las matrices left y right elemento por elemento
function merge (arr, p, q , r) {
  let n1
  let n2
  n1 = q - p + 1
  n2 = r - q
  let left = []
  let right = []
  for (var i = 0; i < n1; i++) {//iniciamos en 0 porque la matriz en js comienza en 0 //si la matriz iniciara en 1 for(i=1;i<=n1;i++) {
    left[i] = arr[p + i - 1] 
  }
  for (var j = 0; j < n2; j++) {//iniciamos en 0 porque la matriz en js comienza en 0 //si la matriz iniciara en 1 for(j=1;j<=n2;j++) {
    right[j] = arr[q + j]
  }
  left[n1] = Infinity //si matriz inicia en 1 seria left[n1 + 1] = Infinity 
  right[n2] = Infinity //si matriz inicia en 1 seria right[n2 + 1] = Infinity 
  let ii = 0 //si la matriz empieza en 1, ii=1
  let ij = 0 //si la matriz empieza en 1, ij=1
  for (var k = (p - 1); k < r ; k++) {//como la matriz de js inicia en 0 restamos p-1 //para cuando la matriz inicia en 1 for(k=p;k<=r;k++)
    if (left[ii] <= right[ij]) {
      arr[k] = left[ii]
      ii = ii + 1 
    }
    else{
     arr[k] = right[ij]
      ij = ij + 1
    }
  }
console.log("Le: " + left);
console.log("Ri: " + right);
//console.log("Arr: " + arr);
}
//Dividir la matriz en mitades y fusionarlas recursivamente
function mergeSort (arr, p, r) {
  let q
  if (p < r) {
    q = Math.floor((p + r) / 2) //redondeo hacia abajo  
    mergeSort(arr,p,q)
    mergeSort(arr,q+1,r)
    merge(arr,p,q,r) 
  }
 
}
//arr = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
//arr = [2, 4, 5, 7, 1, 2, 3, 6];
arr = [4, 2, 7, 5, 2, 1, 3, 6];
//arr = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3, 1, 0, 7, 12, 6, 7, 2, 9,];
console.log(arr);
var p=1;
//console.log(p);
var r=arr.length;
//console.log(r);
mergeSort(arr,p,r)
console.log(arr);