// var saya = {
//   nama : 'zada',
//   kelas :'5B',
//   status :'mahasiswa',
//   sapa : function (){
//     return 'hai, nama saya'+saya.nama+
//             'saya kelas ' +saya.kelas+
//              'saya seorang ' +saya.status;
//   }
// }

// console.log(saya.sapa());

function obj1 (nama){
    let mhs = {};
    mhs.nama = nama;
    return mhs;
  }
  
  var mhs1 = obj1('faqih');
  console.log(mhs1)
  
  var main = {};
  main.nama = 'faqih';
  main.main = 'dota2';
  console.log(main)
  
  function buatObject(nama){
    var namaObj = {};
    namaObj.nama = nama;
    return namaObj;
  }
  dolan = buatObject('zada');
  dolan.main = 'PB';
  
  console.log(dolan)
  
  var newObj = {...main, ...dolan};
  console.log(newObj);