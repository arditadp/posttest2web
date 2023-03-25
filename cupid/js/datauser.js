function datauser(){
    let  dataUser = JSON.parse(sessionStorage.getItem('dataUser'));
    // Ambil index terakhir
    let lastIndex = dataUser.length - 1;
    // Ambil data pada index terakhir
    let dataTerakhir = dataUser[lastIndex];

    document.getElementById('daf_lengkap').textContent = dataTerakhir.lengkap;
    document.getElementById('daf_email').textContent = dataTerakhir.email;
    document.getElementById('daf_nomor').textContent = dataTerakhir.nomor;
    document.getElementById('cari').textContent = dataTerakhir.cari;
    document.getElementById('gender').textContent = dataTerakhir.gender;
    document.getElementById('kriteria').textContent = dataTerakhir.kriteria.join(',');
};

datauser();
