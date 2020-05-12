function MaxSubarray(arr,n){
  let maximum = 0;
  let current;
  for (var i = 0; i < n; i++) {
	current = 0;
	for (var j = i; j < n; j++) {
		current = current + arr[j]
		if (current > maximum){
         maximum = current;
         //console.log(maximum);
         inicio = i;
         final = j;
		}
	}
  }
  return maximum
}

//arr = [13,-3,-25,20,-3,-16,-23,18,20,-7,12,-5,-22,15,-4,7]
arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
let maximo;
let n=arr.length;
var inicio,final;
maximo = MaxSubarray(arr,n);
console.log(inicio,final,maximo);
console.log("--------------");
for (var i = inicio; i <= final; i++) {
	console.log("SubArray [" + i + "] = " + arr[i]);
}

