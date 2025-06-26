const sumAll = function(num1, num2) {
  if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2) || !(typeof num1 === 'number') || !(typeof num2 === 'number')) {
    return "ERROR";
  }
  
  if (num1 > num2) {
    const temp = num2;
    num2 = num1;
    num1 = temp;    
  }

  let sum = 0;
  
  while (num2 >= num1) {
    sum += num2;
    num2--;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
