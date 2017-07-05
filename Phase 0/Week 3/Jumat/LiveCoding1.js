/*
HACKTIV8 Online Live Coding 1

Nama: Rifqi Anugrah

==========
THE RUNNER
==========

Berikut ini merupakan data anak-anak muda yang berhasil selamat dari bencana tersebarnya virus ganas yang mematikan hampir
mematikan seluruh penduduk bumi. Anak-anak muda yang berhasil selamat disini, disebut dengan runner, Karena mereka harus
terus berlari / berpindah tempat untuk tetap hidup.

[PERINTAH]
Buatlah 4 buah Runner sebagai Object secara JSON dengan yang struktur didalam nya terdapat:
Name , Age ,  dan Skill

Name  Age  Skill
Thomas  28   Visioning
Teresa  35   Cooking
Fry Pan 21   Crafting
Gally   32   Fighting

Masukan ke 4 Object tersebut pada sebuah Array
Buat Iterasi sebanyak jumlah Object
Buat akses setiap property

[CONTOH]
Array[index].objectProperty

Tampilkan informasi seperti contoh berikut:

Nama : Thomas
Age : 28
Skill : Visioning

Hitunglah Runner yang Umur nya di antara 20 dan 30 dan tampilkan Namanya

Runner Between 20 - 30 : NamaRunner-1, NamaRunner-2

*/


//Mulai Code dibawah ini

var array = {
  name: ['Thomas',
        'Teresa',
        'Fry Pan',
        'Gally'],
  age: ['28',
       '35',
       '21',
       '32'],
  skill: ['Visioning',
         'Cooking',
         'Crafting',
         'Fighting'],
};

console.log('Name: ' + array.name[0]);
console.log('Age: ' + array.age[0]);
console.log('Skill: ' + array.skill[0]);

console.log('Name: ' + array.name[1]);
console.log('Age: ' + array.age[1]);
console.log('Skill: ' + array.skill[1]);

console.log('Name: ' + array.name[2]);
console.log('Age: ' + array.age[2]);
console.log('Skill: ' + array.skill[2]);

console.log('Name: ' + array.name[3]);
console.log('Age: ' + array.age[3]);
console.log('Skill: ' + array.skill[3]);
