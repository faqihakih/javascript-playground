//soal 1 A
console.log("// jawaban soal nomor 1 A")
var urutkan = () => {
  arraySatu = [28, 2 , 18, 78, -2, 98, 0, 15, 27];

  let newArr = arraySatu.sort(function(a, b){
    return a - b
    });
  console.log(newArr.join());
}
urutkan();

// soal 1 B
console.log("// jawaban soal nomor 1 B")
var balik = () => {
  nama = [ "Faqih", "felix", "FAdlan", "yayang", "fikri", "rijal"];
  console.log(nama.toString());
  console.log(nama.sort().reverse().toString());
}

balik();

//soal 1 C
// console.log("// jawaban soal nomor 1 C")
// var count = () => {
//   nilai1 = [ 23, 7, 9];
//   nilai2 = [-2, 0];

//   for (i = 0; i < nilai2.length; i++) {
//     for (j = 1; j > 0 ; j--) {
//       console.log(nilai1[i] + nilai2[i])
//     }
//   }
// }

// count();