// http://jsbin.com/xusabol/edit?js,console

var Human1 = {
    nama: 'Tono',
    hari: 'Senin',
    kehadiran: 'Masuk',
    alasan: ''
}

var Human2 = {
    nama: 'Tono',
    hari: 'Rabu',
    kehadiran: 'Masuk',
    alasan: ''
}

var Human3 = {
    nama: 'Tono',
    hari: 'Jumat',
    kehadiran: 'Absen',
    alasan: 'Dinas Luar'
}

var absensi = [Human1, Human2, Human3];
var totalHariKerja = 0;
var totalMasuk = 0;
var totalTidakMasuk = 0;

for(var i = 0; i < absensi.length; i++) {
  console.log('Nama: ' + absensi[i].nama);
  console.log('Hari: ' + absensi[i].hari);
  console.log('Kehadiran: ' + absensi[i].kehadiran);
  
  if(absensi[i].alasan !== '') {
    console.log('Alasan: ' + absensi[i].alasan);
  }
  if(absensi[i].kehadiran === 'Masuk') {
    totalMasuk += 1;
  } else {
    totalTidakMasuk += 1;
  }
  totalHariKerja += 1;
}

console.log('Total hari kerja minggu ini: ' + totalHariKerja + ' Hari');
console.log('Total Masuk: ' + totalMasuk + ' Hari');
console.log('Total Tidak Masuk: ' + totalTidakMasuk + ' Hari');