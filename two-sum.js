var twoSum = function (nums, target) {
  //BRUTE FORCE
  //for loop within a for loop
  //loop through nums (i)
  //have another loop going through nums to compare first number to subsequent numbers (j)
  //if i + j === target, return [i, j]
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = 1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] === target || i != j) {
  //       return [i, j];
  //     }
  //   }
  // }

  //HASH MAP
  //loop over array
  //at each iteration, target - nums[i]
  //does difference exist in object?
  //if not, assign a key value pair {nums : index}
  //if exists, return difference's value and the current [i]
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i]; //2

    let difference = target - value; //7

    if (map[difference] !== undefined) {
      //map[7]
      console.log("map difference", map[difference]);
      console.log(map);
      return [map[difference], i];
    } else {
      map[value] = i; //map[2]:0
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
