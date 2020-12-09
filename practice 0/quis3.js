console.log("// jawaban soal nomor 3")
var  polidrom = (kata) => {
  // jadiin kata tsbt ke loweecase lalu hilangkan spasi di kata lalu, di dipisah tiap huruf, lalu jadikan string
  var urut = kata.toLowerCase().replace(/\s/g, '').split("").toString()
  console.log(urut)
  // jadiin kata tsbt ke loweecase lalu hilangkan spasi di kata lalu, di dipisah tiap huruf,lalu di urutkan secara terbalik, lalu jadikan string
  var terbalik = kata.toLowerCase().replace(/\s/g, '').split("").reverse().toString()
  console.log(terbalik)
  
  if(urut === terbalik){
    console.log(kata+" kata polidrom");
  }else{
    console.log(kata+" bukan kata polidrom");
  }
}

polidrom("nurse run");
polidrom("race car");
polidrom("makam");

