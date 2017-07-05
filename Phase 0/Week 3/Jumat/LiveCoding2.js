// HACKTIV8 Online Live Coding 2

// Nama: Rifqi Anugrah

// ======================
// War Against The Undead
// ======================

// Kamu adalah seorang ksatria yang dituntut untuk maju berperang menghadapi Pasukan yang tidak akan mati,
// Hanya ada satu cara untuk mengalahkan pasukan ini , yaitu apabila kamu menancapkan pedang kamu tepat di tengah-tengah jantung pasukan ini!
// Serangan kamu pas di jantung musuh apabila : angka 'Pertama' = Genap dan Angka 'Terakhir' = Ganjil .

// [PERINTAH]
// Buatlah sebuah fungsi serangan.
// fungsi serangan akan menerima parameter berupa angka.
// dan Jika angka 'Pertama' = Genap dan Angka 'Terakhir' = Ganjil, maka akan tampil pesan : One Man Down!
// dan Jika Hasil angka 'Pertama' = Genap dan Angka 'Terahkir' = Genap , maka akan tampil Pesan : "Try Again to Attack!"
// dan Jika Hasil angka 'Pertama' = Ganjil dan Angka 'Terahkir' = Ganjil , maka akan tampil Pesan : "Try Again to Attack!"
// dan Jika Hasil angka 'Pertama' = Ganjil dan Angka 'Terahkir' = Genap , maka akan tampil Pesan : "You are Dead!"

// [CONTOH]
// serangan(21) // One Man Down!
// serangan(11) // Try Again to Attack
// serangan(19) // Try Again to Attack
// serangan(28) // Try Again to Attack
// serangan(18) // You are Dead
// */

function serangan(attack1) 
{
  //start code here
  
  var angka = attack1.split('');
  
  if(angka[0] % 2 === 0 && angka[1] % 2 !== 0) {
    angka = "One Man Down!";
  }
  if(angka[0] % 2 === 0 && angka[1] % 2 === 0) {
    angka = "Try Again to Attack!";
  }
  if(angka[0] % 2 !== 0 && angka[1] % 2 !== 0) {
    angka = "Try Again to Attack!";
  }
  if(angka[0] % 2 !== 0 && angka[1] % 2 === 0) {
    angka = "You are Dead!";
  }
  
  return angka;
}

console.log(serangan(21)); // One Man Down!
console.log(serangan(11)); // Try Again to Attack
console.log(serangan(19)); // Try Again to Attack
console.log(serangan(28));// Try Again to Attack
console.log(serangan(18));// You are Dead