// Array functions

let nums = []

//nums.push(1);
nums.push(2);
nums.push(3);
nums.push(4);
nums.push(5);
nums.push(6);

nums;

let top = nums.pop();
top

// in operator retrieves the index
for(let i in nums) {
    console.log(i)
}

// of operator retrieves the value at the index
for(let i of nums) {
    console.log(i)
}

// foreach
nums.forEach((val, index, arr) => {
    console.log(`value ${val} at index ${index}`) 
    //console.log(arr)
})

//destructuring 