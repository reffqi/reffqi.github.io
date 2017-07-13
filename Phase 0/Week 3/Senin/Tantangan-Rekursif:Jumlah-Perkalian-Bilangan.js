// http://jsbin.com/hozelif/edit?js,console

// Fungsi Pertama

function numberSum(num) {
  if(num == 1) {
    return 1;
  }
  else {
    return num * numberSum(num - 1);
  }
}

console.log(numberSum(5));


// Fungsi Kedua

function numSum(num1, num2) {
  if(num1 == 1) {
    return 1;
  } 
  else if(num1 > num2) {
    return num1 * numSum(num1 - num2, num2);
  } 
  else {
    return num1;
  }
}

console.log(numSum(12, 5));