https://codeshare.io/G7119o

/*
HACKTIV8 Final Live Coding 3

Nama : Rifqi Anugrah

======================
Pair Programming
======================

[DESKRIPSI]
HACKTIV8 adalah kelas pemrograman yang sedang menyusun susunan Pair Programming.
Setiap murid di kelas akan dibagi menjadi kelompok beranggotakan dua orang.
Apabila jumlah murid di kelas ganjil, instruktur yang akan menemani satu orang yang tersisa.

Buatlah susunan pasangan Pair Programming di kelas!

[INSTRUKSI]
Tersedia sebuah function bernama arrangePairs yang akan menerima satu parameter berupa string,
yang berisikan nama-nama murid di kelas dipisahkan berdasarkan spasi. function akan mengembalikan sebuah array baru yang merupakan kelompok-kelompok pembagian tersebut.

* Ubahlah huruf awal nama murid menjadi huruf capital. *

[START]
*/


function arrangePairs(studentsArr) {

  var arr = studentsArr.split(' ');
  
  for(var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  
  return arr.join(' dan ');

}

console.log(arrangePairs('yani joni doni roni')); // ['Yani dan Joni', 'Doni dan Roni']
console.log(arrangePairs('james jake jade')); // ['James dan Jake', 'Jade dan Instruktur']
console.log(arrangePairs('tori nori sori wori mori')); // ['Tori dan Nori', 'Sori dan Wori', 'Mori dan Instruktur'];
console.log(arrangePairs('rudi')); // ['Rudi dan Instruktur']
console.log(arrangePairs('')); // []