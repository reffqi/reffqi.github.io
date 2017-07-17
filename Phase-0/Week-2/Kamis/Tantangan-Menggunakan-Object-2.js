// http://jsbin.com/cosoje/edit?js,console

var Teman = function(nama, kabar, pekerjaan) {
  this.nama = nama;
  this.kabar = kabar;
  this.pekerjaan = pekerjaan;
  this.sapa = function(othersapa) {
    console.log('Halo ' + othersapa + ', apa kabar?');
  }
  this.balasSapa = function(otherbalasSapa) {
    console.log('Halo ' + otherbalasSapa + ' kabarku ' + kabar);
  }
  this.tanyaPekerjaan = function() {
    console.log('Apa pekerjaanmu saat ini?');
  }
  this.balasPekerjaan = function(otherbalasPekerjaan) {
    console.log('Pekerjaanku saat ini adalah ' + pekerjaan);
  }
  this.berpisah = function(otherberpisah) {
    console.log('Senang bertemu denganmu ' + otherberpisah.nama + ', semoga kamu sukses sebagai ' + otherberpisah.pekerjaan);
  }
}

var budi = new Teman('Budi', 'baik', 'developer');
var tono = new Teman('Tono', 'baik', 'chef');

budi.sapa(tono.nama);
tono.balasSapa(budi.nama);
budi.tanyaPekerjaan();
tono.balasPekerjaan();
budi.berpisah(tono);