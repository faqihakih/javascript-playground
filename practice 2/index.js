// apa perbedaam antara const let dan var

// const => imuttable variabel (tidak bisa di ubah)
// let => muttable variabel (bisa di ubah)
// var => muttable variabel (bisa di ubah - scope bebas)

// ini contoh block scope
// for (var i = 0; i < 10; i++) {
//     console.log('loop pertama : ', i);
// }

// for (var i = 0; i <= 5; i++) {
//     console.log('loop kedua : ', i);
// }
// console.log(i); // undefined
// let nama
// nama = 'faqih'
// const alamat = 'tegal'
// console.log(nama, alamat);


// contoh function

// const km = 10;
// console.log(berjalan(km));

// function berjalan(x) {
//     const jarak = `${x} km`
    // console.log('sudah jalan sejauh : ', x);
//     return jarak;
// }

const masiswa = [
    {
        nama : "faqih",
        umur : 21
    },
    {
        nama : "zada",
        umur : 21
    }
];

const detailMahasiswa = masiswa.map((m, i) => {
    const detail = `nama lengkap ${m.nama}, usia ${m.umur}`
    return detail;
});

console.log(masiswa);
console.log(detailMahasiswa);