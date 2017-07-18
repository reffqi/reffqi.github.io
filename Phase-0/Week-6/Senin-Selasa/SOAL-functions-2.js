// Function 2 Competency Test
/*
Disediakan sebuah function stringManipulator yang akan memproses sebuah string. Function
tersebut akan melalui beberapa function kecil di dalamnya dan mengembalikan sebuah string
baru yang telah berubah. Adapun function ini membutuhkan 3 function terpisah yaitu:
removeDash, capitalizeString, dan transformTextToNumber.
Tanpa mengubah function stringManipulator, selesaikan function removeDash,
capitalizeString, dan transformTextToNumber dengan benar!
Function removeDash: menerima parameter berupa string dan mengembalikan string baru
dengan menghapus semua simbol ‘-’ dan menggantinya dengan ‘ ‘ (spasi).
Ex: “hello-world” => “hello world”
Function capitalizeString: menerima parameter berupa string dan mengembalikan string baru
yang merupakan kata yang telah dikapital. Kata yang kapital: huruf depan setiap kata besar /
uppercase, dan huruf sisanya kecil / lowercase.
Ex: “hello world” => “Hello World”
Function transformTextToNumber: menerima parameter berupa string dan mengembalikan
string baru dengan perubahan dimana untuk beberapa huruf, diubah menjadi bentuk angka
dengan pola berikut:
Huruf i diganti menjadi 1
Huruf e diganti menjadi 3
Huruf s diganti menjadi 5
Huruf o diganti menjadi 0
Huruf a diganti menjadi 4
Ex: “helicopter fly away” => “h3l1c0pter fly 4w4y”
Apabila seluruh function tersebut selesai di buat, function s
tringManipulator​ akan
mengembalikan nilai berikut:
Ex: “hello-world” => “H3ll0 W0rld”
*/

function removeDash(str) {
  // Code Disini
  str = str.split("-").join(" ");
  console.log(str);
}

function capitalizeString(str) {
  // Code Disini
  var low = str.toLowerCase(" ");
  var cap = low.charAt(0).toUpperCase(" ");
  return cap;
}

function transformTextToNumber(str) {
  // Code Disini
  if(str == "i") {
    return 1;
  }
  if(str == "e") {
    return 3;
  }
  if(str == "s") {
    return 5;
  }
  if(str == "o") {
    return 0;
  }
  if(str == "a") {
    return 4;
  }
}

function stringManipulator(str) {
  var cleanedStr = removeDash(str);
  var capitalizedStr = capitalizeString(cleanedStr);
  var transformedStr = transformTextToNumber(capitalizedStr);
  return transformedStr;
}

console.log(stringManipulator("Hello-world,-tHis-IS-aN-eXAMple-seNTence"));
// H3ll0 W0rld, Th15 15 4n 3x4mpl3 53nt3nc3

console.log(stringManipulator("lORem-IpSUM DolOR sIt-AmeT"));
// L0r3m 1p5um D0l0r 51t 4m3t

console.log(stringManipulator("d1s i5-v3Ry e4sy-I can-do th1s"));
// D15 15 V3ry 345y 1 C4n D0 Th15
