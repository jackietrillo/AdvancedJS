function bubbleSort(arr) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] < arr[i]) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }
  }
  return arr;
}

function swap(arr, x, y) {
  var temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

function randomArray(size, max) {
    let arr =  new Array(size).fill(0);;
    for(let i =0; i < arr.length; i++) {
        arr[i] = Math.floor((Math.random() * max))
    }
    return arr;
}

let arr = randomArray(5,10);
arr

bubbleSort(arr);

arr
