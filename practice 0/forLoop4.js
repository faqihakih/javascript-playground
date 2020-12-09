console.log("//pola SegitigaSatu");
function polaSegitigaSatu(angka) {
  for (var baris = 1; baris <= angka; baris++) {
    for (var tinggi = baris; tinggi >= 1; tinggi--) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}
polaSegitigaSatu(5);


console.log ("//pola SegitigaKedua")
function polaSegitigaKedua(angka){
  for( var baris = 0; baris <= angka; baris++){
    for( var tinggi = 0; tinggi <= angka; tinggi++){
      if(tinggi>baris){
        process.stdout.write("*");
      } else{
        process.stdout.write(" ");
      }
  }
    process.stdout.write("\n");
  }
}
polaSegitigaKedua(5)