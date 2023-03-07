var longestConsecutive = (nums, maxScore = 0) => {
  for (const num of nums) {/* Time O(N) */
      //let [ currNum, score ] = [ num, 1 ];
      let currNum = num;
      let score = 1;
      while (isStreak(nums, (currNum + 1))) {/* Time O(N * N) */
          currNum++;
          score++;
      }

      maxScore = Math.max(maxScore, score);
  }

  return maxScore;
}

const isStreak = (nums, num) => {
  for (let i = 0; i < nums.length; i++) {/* Time O(N) */
      const isEqual = nums[i] === num
      if (isEqual) return true;
  }

  return false;
}

/*function longestConsecutive(nums) {
    
  const sortedNums = nums.sort(function (a, b) {
    return a - b;
  });

  let length = 0;
  let j = 1;
  let dup = 0;
  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] == sortedNums[j]) {
      dup++;
      length = j + 1;
    }
    else if (sortedNums[i] + 1 === sortedNums[j]) {
      length = j + 1;
    } else {
      break;
    }
    j++;
  }
  return length - dup;
}
*/
const nums0 = [100,4,200,1,3,2]
const nums1 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
const nums2 = [0, 0, 3, 2, 5, 1, 2, 1, 0, 1];
const nums3 = []
console.log(nums3.length)
const result = longestConsecutive(nums0);
result;
