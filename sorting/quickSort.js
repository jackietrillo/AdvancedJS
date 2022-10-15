function quickSort(arr, start, end) {
  if (start < end) {
    let partitionIndex = partition(arr, start, end);
    quickSort(arr, start, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, end);
  }
}

function partition1(arr, start, end) {
  const pivotValue = arr[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] <= pivotValue) {
      swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }
  swap(arr, pivotIndex, end);
  return pivotIndex;
}

function partition2(arr, start, end) {
  const pivotValue = arr[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] >= pivotValue) {
      swap2(arr, i, pivotIndex);
      pivotIndex++;
    }
  }
  swap2(arr, pivotIndex, end);
  return pivotIndex;
}

function partition(arr, start, end) {
  let pivot = arr[start];
  let i = start - 1;
  let j = end + 1;
  while (true) {
    do {
      i++;
    } while (arr[i] < pivot);

    do {
      j--;
    } while (arr[j] > pivot);

    if (i < j) swap(arr, i, j);
    else return j;
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function swap2(arr, i, j) {
    const temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }


function randomArray(size, max) {
  let arr = new Array(size).fill(0);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * max);
  }
  return arr;
}

//const arr = [3, 2, 5, 1, 7, 4, 6];
const arr = randomArray(10, 10)

console.log(arr);
quickSort(arr, 0, arr.length - 1);
arr;
