const tombol = document.getElementById("daftar")
tombol.onclick = daftar;

function daftar(e){
    e.preventDefault();

    const nama = document.getElementById("daf_nama").value;
    const pass = document.getElementById("daf_pass").value;

    localStorage.setItem("Nama", nama);
    localStorage.setItem("Password", pass);

    alert("Anda Berhasil Daftar");
}