function MaxSubarrayKadame(arr,n){
  let maximum = 0;
  let current = 0;
  for (var i = 0; i < n; i++) {
		current = current + arr[i]
		if (current < 0){
      current = 0;
		}
    if (maximum<current){
      maximum = current;
    }

  }
  return maximum
}

//arr = [13,-3,-25,20,-3,-16,-23,18,20,-7,12,-5,-22,15,-4,7]
arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
let n=arr.length;
console.log("--------------");
console.log(MaxSubarrayKadame(arr,n))


