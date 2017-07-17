// http://jsbin.com/givabub/edit?js,console

// Tugas 1

console.log("Tugas 1");

var nama = "Rifqi Anugrah";
var angkaPembilang = 25;
var angkaPenyebut = 5;
hasilBagi = angkaPembilang / angkaPenyebut;
console.log("Halo " + nama + ", " + angkaPembilang + " dibagi " + angkaPenyebut + " adalah sama dengan " + hasilBagi);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")


// Tugas 2

console.log("Tugas 2");

var alas = 10;
var tinggi = 4;
luasSegitiga = (alas * tinggi) / 2;
console.log("Luas Segitiga: " + luasSegitiga);
console.log("~~~~~~~~~~~~~~~~~")


// Tugas 3

console.log("Tugas 3");

var tahun = 2017;
if(tahun % 4 === 0)
  if(tahun % 100 !== 0){
    console.log(tahun + " adalah tahun kabisat");
  } 
  else {
    if(tahun % 400 === 0){
      console.log(tahun + " adalah tahun kabisat");
    }
    else {
      console.log(tahun + " adalah bukan tahun kabisat");
    }
  }
else {
  console.log(tahun + " adalah bukan tahun kabisat");
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")