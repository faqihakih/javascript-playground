// var nama = {
//   nama: "faqih",
//   kelas: "5b"
// };
// var alamat = {
//   alamat: "tegal",
//   kelas: "3A"
// };

// const newObj = { ...nama, ...alamat }

// // Object.assign(nama, alamat);
// for (const [key, value] of Object.entries(nama)) {
//   console.log(`${key} ${value}`)
// }

// console.log(newObj)

var nama = {
  nama : "faqih",
  kelas : "5B",
  alamat : "tegal"
};
var dosen = {
  namaDosen : "udin",
  kelas : "ala"
}
console.log(nama);
for (const [key, value] of Object.entries(nama)) {
  console.log(`${key} : ${value}`);
}

newObj = {...nama, ...dosen};
console.log(newObj);
newObj.nilai = 13;
newObj.nama = "zada";
console.log(newObj);

var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    console.log(this.firstName + " " + this.lastName);
  }
};

let names = person.fullName();
console.log(names);

let namess = person.fullName;
console.log(namess);