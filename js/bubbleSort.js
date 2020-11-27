function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < (len - 1); i++) {
      for(let j = 0; j < (len - 1 - i); j++) {
        if(arr[j] > arr[j+1]) {
          let temp = arr[j+1];
          arr[j+1] = arr[j];
          arr[j] = temp;
        }
      }
    }
   return arr;
}

// test code
let arr = [4, 10, 32, 1, 4]
bubbleSort(arr) // [1, 4, 4, 10, 32]
