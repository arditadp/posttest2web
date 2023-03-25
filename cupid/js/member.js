let dataUser = JSON.parse(sessionStorage.getItem("dataUser"))||[];

function member(){
    // datauser
    let lengkap = document.getElementById("daf_lengkap").value;
    let email = document.getElementById("daf_email").value;
    let nomor = document.getElementById("daf_nomor").value;
    let cari = document.getElementById("cari").value;
    let radios = document.getElementsByName("gender");
    let gender = "";

    for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
        gender = radios[i].value;
        break;
    }}

    let kriteria = [];
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked');

    for (let i = 0; i < checkboxes.length; i++) {
    kriteria.push(checkboxes[i].value);
    }

    dataUser.push({
        lengkap : lengkap,
        email : email,
        nomor : nomor,
        cari : cari,
        kriteria : kriteria,
        gender : gender
    });

    alert("Anda Berhasil Daftar");
    sessionStorage.setItem("dataUser", JSON.stringify(dataUser));
    window.location.href = "datauser.html"
}
   document.getElementById('userform').addEventListener('submit', function(e) {
       e.preventDefault(); // mencegah pengiriman form
       member();
   });