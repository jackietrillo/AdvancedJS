var twoSum = function (nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let comp = target - nums[i];   
    if (comp in map) {
      return [map[comp], i];
    } else {
      map[nums[i]] = i;     
    }
  }
};

let target = 9;
let nums = [3, 7, 11, 2];

target = 0;
nums = [0, 7, 11, 0];

target = 6;
nums = [3,2,4];

target = 6;
nums = [3,3];

target = 9;
nums = [2, 7, 11, 15];
let result = twoSum(nums, target);
console.log(result);
