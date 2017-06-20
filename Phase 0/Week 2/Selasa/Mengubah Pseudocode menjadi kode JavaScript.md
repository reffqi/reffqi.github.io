# Tugas 1

SIMPAN 'nama'
SIMPAN 'angka pembilang'
SIMPAN 'angka penyebut'
HITUNG 'hasil bagi' dari 'angka pembilang' dibagi 'angka penyebut'
TULISKAN "Halo 'nama', 'angka pembilang' dibagi 'angka penyebut' adalah sama dengan 'hasil bagi'

```
var nama = "Rifqi";
var angkaPembilang = 5;
var angkaPenyebut = 2;
hasilBagi = angkaPembilang % angkaPenyebut;
console.log("Halo " + nama + ", " + angkaPembilang + " dibagi " + angkaPenyebut + " adalah sama dengan " + hasilBagi)
```

http://jsbin.com/wuciyan/edit?js,console

# Tugas 2

SIMPAN 'alas' dari segitiga
SIMPAN 'tinggi' dari segitiga
HITUNG 'luas segitiga' dari 'alas' dikali 'tinggi' dibagi 2
TULISKAN "Luas Segitiga: 'luas segitiga'"

var alas = 10;
var tinggi = 4;
luasSegitiga = alas * tinggi / 2;
console.log("Luas Segitiga: " + luasSegitiga)

http://jsbin.com/topuzus/edit?js,console

# Tugas 3

MASUKKAN sebuah tahun pada `tahun`
IF `tahun` habis dibagi 4 THEN:
    IF `tahun` tidak habis dibagi 100 THEN:
        TULISKAN "`tahun` adalah tahun kabisat"
    ELSE:
        IF `tahun` habis dibagi 400 THEN:
            TULISKAN "`tahun` adalah tahun kabisat"
        ELSE:
            TULISKAN "`tahun` adalah bukan tahun kabisat"
        ENDIF
    ENDIF
ELSE:
    TULISKAN "`tahun` adalah bukan tahun kabisat"
ENDIF

```
var tahun = 2017;
if(tahun % 4 === 0)
  if(tahun % 100 !== 0){
    console.log(tahun + " adalah tahun kabisat")
  } 
  else {
    if(tahun % 4 === 0){
      console.log(tahun + " adalah tahun kabisat")
    }
    else {
      console.log(tahun + " adalah bukan tahun kabisat")
    }
  }
else {
  console.log(tahun + " adalah bukan tahun kabisat")
}
```

http://jsbin.com/desawom/edit?js,console