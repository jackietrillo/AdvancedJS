const binarySearch = (arr, key) => {
  let lo = 0;
  let hi = arr.length - 1;

  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (key === arr[mid]) return mid;
    else if (key > arr[mid]) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return -1;
};

const binarySearchRec = (arr, lo, hi, key) => {
  if (lo > hi) return -1;
  let mid = Math.floor((lo + hi) / 2);
  if (key === arr[mid]) {
    return mid;
  } else if (key > arr[mid]) {
    lo = mid + 1;
    return binarySearchRec(arr, lo, hi, key);
  } else {
    hi = mid - 1;
    return binarySearchRec(arr, lo, hi, key);
  }
};

const arr = [1, 2, 3, 4, 5, 6];

//const index = binarySearch(arr, 4);
const index = binarySearchRec(arr, 0, arr.length - 1, 4);

console.log(index);
