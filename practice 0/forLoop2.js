function deretGanjilGenap(angka) {
    for (var i = 1;i <= angka; i++) {
        if (angka % 2 == 0) {
            console.log(i + " Adalah bilangan Genap");
        } else {
            console.log(i + " Adalah bilangan Ganjil");
        }
    }
}
deretGanjilGenap(12);