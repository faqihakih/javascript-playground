// function es5
function contohEs5() {
    console.log('Squad Web Dev')
  }
  contohEs5()
  
  var a
  function plugin(){
  let a = 1
  let b = 2
  let c = a +b
  console.log(c)
   }
   plugin()
  // standar es6
  const es6Variable = () => {
    const tahun = 2020
    if(tahun % 4 === 0){
      console.log('Tahun kabisat')
    }else{
      console.log('Dudu Banset')
    }
  }
  es6Variable()
  //es6 degan parameter
  const contohes6 = (nilai) => {
    if(nilai % 2 === 0){
      console.log('angka genap')
    }else{
      console.log('angka ganjil')
    }
  }
  contohes6(11)
  // asynchronous hasil eks atau output ngga slalu urut dengan code.
  // tapi berdasarkan waktu proses
  // synchronous di eks satu persatu sesuai urutan code
  // promise merupakan nilai yang belum tentu diketahui nilainya saat promise dibuat. promise memungkinkan pengguna dg handler dg keberhasilan atau kegagalan aksi async