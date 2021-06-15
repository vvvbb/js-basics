const closestToZero = (numbers) => {
  if (numbers == null || numbers.length < 1) {
    return 0;
  }
  let closest = numbers[0];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] < Math.abs(closest) && numbers[i] > 0) {
      closest = numbers[i];
    } else if (Math.abs(numbers[i]) < Math.abs(closest) && numbers[i] < 0) {
      closest = numbers[i];
    }
  }
  return closest;
};
// var test1 = closestToZero([-9, 8, 2, -5, 7]);
console.log("test1 : ", closestToZero([-9, 8, 2, -5, 7]));

var testCTZ1 = closestToZero([5, 7, 20, 4, 3, 11, 8, 5]);
console.log("testCTZ1 : ", testCTZ1);
var testCTZ2 = closestToZero(null);
console.log("testCTZ2 : ", testCTZ2);
var testCTZ3 = closestToZero([5, -7, 20, 4, -3, 1, 11, -8, 5]);
console.log("testCTZ3 : ", testCTZ3);
// TO BE CONTINUED...

/* 
   function closestToZero(numbers) {
    if(!numbers.length){
        return 0;
    }
    
    let closest = 0;
    
    for (let i = 0; i < numbers.length ; i++) {
        if (closest === 0) {
            closest = numbers[i];
        } else if (numbers[i] > 0 && numbers[i] <= Math.abs(closest)) {
            closest = numbers[i];
        } else if (numbers[i] < 0 && - numbers[i] < Math.abs(closest)) {
            closest = numbers[i];
        }
    }
    
    return closest;
  }
  
  */
