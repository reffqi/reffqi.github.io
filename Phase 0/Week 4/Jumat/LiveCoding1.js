https://codeshare.io/al44qg

/*
HACKTIV8 Online Live Coding 1

Nama: Rifqi Anugrah

================
Crack The Number
================

Mike Hammer adalah seorang detektif yang di minta untuk memecahkan sebuah kasus pembunuhan berantai yang terjadi di sebuah kota
di pedalaman eropa. Di tempat kejadian peristiwa, sang pembunuh selalu meninggalan urutan angka, yang ternyata adalah urutan alphabetic dan apabila di gabungkan menjadi sebuah Nama.
Sebagai seorang detektif Mike Hammer di minta untuk mencegah terjadinya pembunuhan selanjutnya dengan cara,
memecahkan angka tersebut untuk di gantikan menjadi nama seseorang yang menjadi target si pembunuh,

Contoh urutan angka:

angka = [1,12,1,19,20,1,9,18,0,1,18,3,8,9,5] // Alastair Archie
angka = [2,1,12,20,8,1,26,1,18,0,6,5,18,7,21,19] //Balthazar Fergus

[PERINTAH]
-  Tersedia fungsi nextTargetName, dimana fungsi tersebut dapat merubah uturan angka tersebut menjadi sebuah
   susunan alphabetic
 - Apabila di temukan angka 0 pada susunan angka, itu berarti adalah sebuah spasi
 - Buatlah susunan huruf itu menjadi sebuah string
 
*/

function nextTargetName(angka){

  // Mulai code disini
	nama = angka.toString();
  var pecahNama = nama.split(',');
  var target;
    switch(pecahNama) {
      case '0':
        target = ' ';
        break;
      case '1':
        target = 'a';
        break;
      case '2':
        target = 'b';
        break;
      case '3':
        target = 'c';
        break;
      case '4':
        target = 'd';
        break;
      case '5':
        target = 'e';
        break;
      case '6':
        target = 'f';
        break;
      case '7':
        target = 'g';
        break;
      case '8':
        target = 'h';
        break;
      case '9':
        target = 'i';
        break;
      case '10':
        target = 'j';
        break;
      case '11':
        target = 'k';
        break;
      case '12':
        target = 'l';
        break;
      case '13':
        target = 'm';
        break;
      case '14':
        target = 'n';
        break;
      case '15':
        target = 'o';
        break;
      case '16':
        target = 'p';
        break;
      case '17':
        target = 'q';
        break;
      case '18':
        target = 'r';
        break;
      case '19':
        target = 's';
        break;
      case '20':
        target = 't';
        break;
      case '21':
        target = 'u';
        break;
      case '22':
        target = 'v';
        break;
      case '23':
        target = 'w';
        break;
      case '24':
        target = 'x';
        break;
      case '25':
        target = 'y';
        break;
      case '25':
        target = 'z';
        break;
    }
  return target.join('');
}

console.log(nextTargetName([1,12,1,19,20,1,9,18,0,1,18,3,8,9,5])); // Alastair Archie