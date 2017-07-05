/*
HACKTIV8 Online Live Coding 3

Nama: Rifqi Anugrah

==========
Digit-digit dalam String
==========

[DESKRIPSI]
Kamu diminta memproses sebuah string dengan cara berikut:
Di dalam string ada bilangan-bilangan satu digit yang bisa positif atau
bisa negatif. Bilangan positif tentunya memiliki simbol '+' sedangkan
bilangan negatif memiliki simbol '-'. Carilah jumlah dari semua bilangan!

[INSTRUKSI]
Tersedia sebuah string sebagai input.
0utput hasil penjumlahan semua digit dalam string tersebut

[CONTOH]
'+5-3+7+9+9-2'		--> 25
*/

function jumlahkan(inputString)
{
  // start code here
  var split = inputString.split('');
  return split[0], split[1] + split[2], split[3] + split[4], split[5] + split[6], split[7] + split[8], split[9] + split[10], split[11] + split[12]
}
  
console.log(jumlahkan('-1-1-1-1-1-2'));        // -7
console.log(jumlahkan('+5-3+5+5-1'));        // 11
console.log(jumlahkan('+4+3+7+1'));            // 15
console.log(jumlahkan('-1-1-1-1-1-2'));		// -7
console.log(jumlahkan('+5-3+5+5-1'));		// 11
console.log(jumlahkan('+4+3+7+1'));			// 15