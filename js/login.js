const formi = document.getElementById("formi");
const nama = document.getElementById("nama");
const pass = document.getElementById("pass");

formi.addEventListener("submit",function(e){
    e.preventDefault();

    const loc_nama = localStorage.getItem("Nama",nama);
    let loc_pass = localStorage.getItem("Password",pass);

    if(nama.value == loc_nama && pass.value == loc_pass){
        alert("Berhasil Masuk");
        window.location
        .href = "beranda.html";
    } else {
        alert("Gagal Masuk");
    }
})