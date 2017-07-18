// Array 2 Competency Test

/*
2. Initial Grouping
Disediakan sebuah function initialGrouping yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialGrouping akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan dipisahkan ke dalam
array dua dimensi.
Ex:
Input: ["Budi", "Badu", "Joni", "Jono"]
Proses:
Huruf depan yang ditemukan: B dan J
Pisahkan nama yang depannya B, dan nama yang depannya J. Masukkan ke dalam array baru
Susun array baru sebagai berikut:
[
[ “Budi”, “Badu” ],
[ “Joni”, “Jono” ],
]
Setiap array dimensi kedua diawali dengan huruf depan yang mengelompokkan nama tersebut.
*/

function initialGrouping(studentsArr) {
  // Code hanya disini
  
}

console.log(initialGrouping(["Budi", "Badu", "Joni", "Jono"]));
/*
[
  [ 'B', 'Budi', 'Badu' ],
  [ 'J', 'Joni', 'Jono' ]
]
*/

console.log(initialGrouping(["Mickey", "Yusuf", "Donald", "Ali", "Gong"]));
/*
[
  [ 'M', 'Mickey' ],
  [ 'Y', 'Yusuf' ],
  [ 'D', 'Donald' ],
  [ 'A', 'Ali' ],
  [ 'G', 'Gong' ]
]
*/

console.log(initialGrouping(["Rock", "Stone", "Brick", "Rocker", "Sticker"]));
/*
[
  [ 'R', 'Rock', 'Rocker' ],
  [ 'S', 'Stone', 'Sticker' ],
  [ 'B', 'Brick' ]
]
*/
