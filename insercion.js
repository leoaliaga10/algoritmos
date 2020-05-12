function inserSort(arr,p,r){
	let Key
	let i
	for (let j = p; j < r; j++) {
		Key = arr[j];
		i = j - 1;
		console.log(i)
		while (i >= 0 && arr[i] > Key) {
			arr[i + 1] = arr[i];
			i = i - 1;
		}
		arr[i + 1] = Key;
	}

}
//arr = [4, 2, 7, 5, 2, 1, 3, 6];
arr = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3, 1, 0, 7, 12, 6, 7, 2, 9,];
console.log(arr);
let p=1;
//console.log(p);
let n=arr.length;
//console.log(n);
inserSort(arr,p,n);
console.log(arr);