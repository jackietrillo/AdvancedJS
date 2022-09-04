var topKFrequent = function (nums, k) {
  let map = {};
  let res = [];
  let bucket = Array.from({ length: nums.length + 1 }, () => []); //new Array(size).fill(0)
 
  // storing frequency of numbers in a map
  for (const n of nums) {
      map[n] = (n in map) ? 1 + map[n] : 1;
  }
  
  // Populate the bucket with numbers in frequency
  // as the index of the bucket
  for(const c in map){      
    bucket[map[c]].push(c);     // push items that have that frequency
  }

  for (let i = bucket.length - 1; i >= 0; i--) {    
      if (bucket[i].length > 0) {
          bucket[i].forEach((elem)=> res.push(elem));
          res
          if(k == res.length){
              return res;
          }
      }      
  }  
};

const nums = [2,2,1,1,1,3,3,3,];
const k = 2;
var result = topKFrequent2(nums, k);
result 
