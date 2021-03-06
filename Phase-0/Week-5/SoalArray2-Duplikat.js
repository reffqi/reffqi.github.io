/*
HACKTIV8 Practice

Nama:

==========
Soal Array 2 - Duplikat
==========

[INSTRUKSI]
Tersedia satu input: array yang memiliki duplikat
Output: array yang telah di-sorted, semua duplikat dihapus

[CONTOH]
1) [1, 4, 3, 1, 2, 2, 4]    ->    [1, 2, 3, 4]
*/

function hapusDuplikat(arr) {
    // start code here
    var angka = arr.sort();
    return Array.from(new Set(angka));
}

console.log(hapusDuplikat([1, 4, 3, 1, 2, 2, 4]));    // [1, 2, 3, 4]
console.log(hapusDuplikat([2, 2, 2, 2]));            // [2]
console.log(hapusDuplikat([1, 2, 3]));                // [1, 2, 3]
console.log(hapusDuplikat([6, 5, 3, 2]));            // [2, 3, 5, 6]