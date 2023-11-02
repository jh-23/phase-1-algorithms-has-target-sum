function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++){
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true 
      }
    }
  }
  return false
}

const prompt = require("prompt-sync")({sigint:true});
const array = prompt("Insert an array: ")
const target = prompt("Insert a target: ")
console.log(array)
console.log(target)
console.log(hasTargetSum(array, target))


/* 
  Write the Big O time complexity of your function here:
  I think this is quadratic time, so 0(n^2).
*/

/* 
  Add your pseudocode here:
function hasTargetSum(array, target) {
  look through each item in the array:
  for (let i = 0; i < array.length; i++) {
    look through the rest of the array for a pair that adds together to the target number
  for (let j = i + 1; j < array.length; j++) {
  if (array[i] + array[j] === target){
  }
    return true
  else return false
  })
  }
  }
}
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;


// 1.  write a function (called hasTargetSum) that receives two arguments (array of integers and a target integer)
// 1.  the function should return true if any two numbers in the array add up to the target number
// 2.  show a few examples ([1, 2, 3], 5), => return true etc. 
// 3. Pseudocode: for array of integers, and a target integer in the function arguments,
// 3. pseudocode cont, seems like it will be a quadratic time Big O notation, since this problem statment is looking for a pair.  
// 3. pseudocode: has to take two numbers within the array, and then compare it to the target integer.