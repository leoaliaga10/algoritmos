function FinMaxCrossSubArray(arr, low, mid, high){
	contador1 = contador1 + 1 
	console.log("Contador 1: " + contador1)
	left_sum = -(Infinity);
	let sum = 0;
	let max_left;
	for (var i = mid-1; i >= low-1; i--) {
		sum = sum + arr[i];
		if (sum > left_sum) {
			left_sum = sum;
			max_left = i;
		}
	}
	right_sum = -(Infinity);
	let max_right;
	sum = 0;
	for (var j = mid; j < high; j++) {
		sum = sum + arr[j];
		if (sum > right_sum) {
			right_sum = sum;
			max_right = j;
		}
	}
	return [max_left,max_right,(left_sum + right_sum)];
}
function FinMaximunSubArray(arr,low,high,vale){
	let mid
	contador2 = contador2 + 1 
	console.log("Contador 2: " + contador2)
	if (low == high){
		return [low,high,arr[low-1]];
	}
	else{
		mid = Math.floor((low + high) / 2); //hacia abajo
		//console.log(mid)
		left = FinMaximunSubArray(arr,low,mid,"L");
		left_sum = left[2];
		right = FinMaximunSubArray(arr,mid + 1,high,"R");
		right_sum = right[2];
		cross = FinMaxCrossSubArray(arr,low, mid, high);
		cross_sum = cross[2];
		if (left_sum >= right_sum && left_sum >= cross_sum){
			return [left[0],left[1],left_sum];
		}
		else if(right_sum >= left_sum && right_sum >= cross_sum){
			return [right[0],right[1],right_sum];
		}
		else{
			return [cross[0],cross[1],cross_sum];
		}
	}		
}
//arr = [13,-3,-25,20,-3,-16,-23,18,20,-7,12,-5,-22,15,-4,7]
arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
var contador1 = 0; //contador de llamadas
var contador2 = 0; //contador de llamadas
var low = 1;
var high = arr.length;
var left_sum,right_sum;
var cross,right,left,subArr;
let a;
console.log(arr);
a = FinMaximunSubArray(arr,low,high,"T");
console.log(a);
n = a[1] - a[0];
for (var q = a[0]; q <= a[1]; q++) {
	console.log("SubArray [" + q + "] = " + arr[q]);
}
//-------------------------------------------------------
function funcion(a,b){
	return [a,b]
}
console.log("---------Ejemplo return funcion----------")
aver = funcion(10,20)
console.log(aver)
console.log(aver[0],aver[1])


