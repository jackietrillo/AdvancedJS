function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
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
arr;

selectionSort(arr);

arr;
