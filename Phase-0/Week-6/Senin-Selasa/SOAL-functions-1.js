/*
Disediakan sebuah function numberProcessing yang akan memproses angka dalam array.
Function tersebut akan menerima parameter berupa array yang berisi angka. Function
numberProcessing membutuhkan 3 function terpisah bernama findMax, findMin, dan findMean.
Tanpa mengubah function numberProcessing, selesaikan function findMax, findMin,
findMean, findOdds, dan findEvens dengan benar!
Function findMax: menerima parameter berupa array angka dan mengembalikan salah satu
angka yang memiliki nilai paling besar dari array tersebut.
Ex: [2, 1, 4, 3] => 4
Function findMin: menerima parameter berupa array angka dan mengembalikan salah satu
angka yang memiliki nilai paling kecil dari array tersebut.
Ex: [2, 1, 4, 3] => 1
Function findMean: menerima parameter berupa array angka dan mengembalikan rata-rata dari
seluruh angka dalam array. Apabila angka koma, lakukan pembulatan kebawah.
Ex: [2, 1, 4, 3] => 2
Function findOdds: menerima parameter berupa array angka dan mengembalikan angka-angka
yang ganjil sebagai string dan dipisahkan dengan tanda ‘-’.
Ex: [2, 1, 4, 3] => “1-3”
Function findEvens: menerima parameter berupa array angka dan mengembalikan
angka-angka yang genap sebagai string dan dipisahkan dengan tanda ‘-’.
Ex: [2, 1, 4, 3] => “2-4”
Apabila seluruh function tersebut selesai di buat, function numberProcessing akan
mengembalikan nilai berikut:
Ex: [2, 1, 4, 3] => “Min: 1, Max: 4, Mean: 2, Odds: 1-3, Evens: 2-4”
*/

function findMax(numberArr) {
  // Code Disini
  var max = Math.max();
  return max;
}

function findMin(numberArr) {
  // Code Disini
  var min = Math.min();
  return min;
}

function findMean(numberArr) {
  // Code Disini
  var mean = Math.floor();
  return mean;
}

function findOdds(numberArr) {
  // Code Disini
  if(numberArr % 2 == 1) {
    
  }
}

function findEvens(numberArr) {
  // Code Disini
  if(numberArr % 2 != 1) {
    
  }
}

function numberProcessing(numberArr) {
  var max = findMax(numberArr);
  var min = findMin(numberArr);
  var mean = findMean(numberArr);
  var odds = findOdds(numberArr);
  var evens = findEvens(numberArr);
  return 'Min: ' + min + ', Max: ' + max + ', Mean: ' + mean + ', Odds: ' + odds + ', Evens: ' + evens;
}

console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]));
// "Min: 0, Max: 10, Mean: 3, Odds: 1-3-5-1-3, Evens: 2-8-10"
