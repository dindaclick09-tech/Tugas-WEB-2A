//buat array agenda
let Agenda=['Bangun','Mandi','Sarapan'];
 
//tampilkan data
function showData() {
    let daftar=document.getElementById('daftar');
 
    daftar.innerHTML="";
 
    for (var i=0; i<Agenda.length; i++) {
        var linkHapus='<a href="#" onclick="DelData('+i+')">Cek</a>';
        daftar.innerHTML+='<li>'+Agenda[i]+' '+linkHapus+'</li>';
    };
}
 //menambahkan agenda
function addData() {
    var input=document.getElementById('agenda');
    //memasukan data ke array
    Agenda.push(input.value);

    //tampilkan data
    showData();
}