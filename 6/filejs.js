var nama = prompt("masukkan nama kamu:").toUpperCase();
var pacar = prompt("masukkan nama pacar kamu:").toUpperCase();
document.getElementById("txtnama").value = nama;
document.getElementById("txtpacar").value = pacar;
alert(nama + " pacar " + pacar);
var konfirmasi = confirm("apakah " + pacar + " mencintai " + nama + "?");
if (konfirmasi === true) {
document.getElementById("hasil").innerHTML = "semoga " + nama + " & " + pacar + " bahagia selamanya"
;
} else {
document.getElementById("hasil").innerHTML = "asik, rebut " + pacar + " ah dari " + nama;
}