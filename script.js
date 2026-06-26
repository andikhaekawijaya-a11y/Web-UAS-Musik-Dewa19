function salam() {
  alert("Selamat datang di Website Album Dewa 19");
}

function album() {
  alert("Dewa 19 memiliki banyak album legendaris.");
}

function personil() {
  alert("Terima kasih telah melihat daftar personil.");
}

function lagu() {
  var x = prompt("Masukkan lagu favorit Dewa 19");

  document.getElementById("hasil").innerHTML =
    "Lagu favorit Anda adalah : " + x;
}

function kirim() {
  alert("Pesan berhasil dikirim.");
}
