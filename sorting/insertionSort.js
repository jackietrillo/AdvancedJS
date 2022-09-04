function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {    
    let currValue = arr[i];
    
    let insertAt = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] >= currValue) {
        arr[j + 1] = arr[j];                       
      }         
      else if (arr[j] < currValue) {
        insertAt = j + 1
        break;
      }
    }    
    arr[insertAt] = currValue;    
  }
}

function swap(arr, x, y) {
  var temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

function randomArray(size, max) {
  let arr = new Array(size).fill(0);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * max);
  }
  return arr;
}

let arr = randomArray(10, 10);
console.log(arr)

insertionSort(arr);
console.log(arr);

