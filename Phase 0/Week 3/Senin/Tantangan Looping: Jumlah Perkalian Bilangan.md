http://jsbin.com/xibiyir/edit?js,console

```javascript
// Fungsi Pertama

function numberSum(num) {
  var hasil = 1;
  for(var N = num; N >= 1; N--) {
    hasil *= N;
  }
  return hasil;
}

console.log(numberSum(5));


// Fungsi Kedua

function numSum(num1, num2) {
  var hasil = 1;
  for(var N = num1; N >= 1; N -= num2) {
    hasil *= N;
  }
  return hasil;
}

console.log(numSum(12, 5));
```