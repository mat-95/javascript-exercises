/**
 * @param {number[]} arr
 * @param {number} toRemove
 * 
 * @returns {number[]}
 */
const removeFromArray = function (arr, ...args) {
  
  for (const arg of args) {
    while (arr.find((number) => number === arg)) {
      arr.splice(arr.findIndex((number) => number === arg), 1);      
    }
  }

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
