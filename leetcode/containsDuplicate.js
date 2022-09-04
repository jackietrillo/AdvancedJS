/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function (nums) {
  const numsSet = new Set();
  for (const i of nums) {
    if (numsSet.has(i)) {
      return true;
    }
    numsSet.add(i);
  }
  return false;
};

var containsDuplicateUsingObject = function (nums) {
  var distinct = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in distinct) {
      return true;
    } else {
      distinct[nums[i]] = i;
    }
  }
  return false;
};

//Second method using Map() (Has to map entire array but code is more readable)
var containsDuplicateUseMap = function (nums) {
  //create a new hashmap with all the items in the array. Any duplicates will be removed.
  const totalWithoutDuplicates = new Map(nums.map((i) => [i]));

  //check if the size of the initial array is larger than the new hashmap.
  return totalWithoutDuplicates.size !== nums.length;
};

//Third method using Set() (Fastest runtime at 91.95% and very readable code)
var containsDuplicateUseSet = function (nums) {
  //Pass the array into a Set() (which removes duplicates) and then compare its size to the original array.
  return new Set(nums).size !== nums.length;
};

let nums = [1, 2, 3, 4];
nums = [1, 2, 3, 4];
nums = [3, 3];
let result = containsDuplicateUseSet(nums);
console.log(result);
