function pohonCemara(angka) {
    for (var baris = 1; baris <= angka; baris++) {
        for (var jarak = angka; jarak >= baris; jarak--) {
          process.stdout.write(" ");
        }
        for (var tinggi = baris; tinggi >= 1; tinggi--) {
            process.stdout.write("*");
        }
        for (var tinggi2 = baris; tinggi2 >= 2; tinggi2--) {
            process.stdout.write("*");
        }
        console.log("\n");
    }
     for (var tinggi3 = 1; tinggi3 <= 3; tinggi3++) {
     for (var tinggi2 = baris; tinggi2 >= 3; tinggi2--) {
         process.stdout.write(" ");
     }
        if (tinggi3 % 2 == 0) {
            process.stdout.write("* *");
            process.stdout.write("\n");
        } else {
            process.stdout.write("***");
            process.stdout.write("\n");
         }
     }
}
pohonCemara(5);