// function color(params) {
//     let lib = [
//         {
//             name: 'Velvet',
//             colors: 'EE4540'
//         },
//         {
//             name: 'Sunset',
//             colors: '8FB9A8'
//         }
//     ];

    
//         params == 'Sunset' ? console.log(params+' color hexa-nya #'+lib[0].colors) : console.log(params+' color hexa-nya #'+lib[1].colors) //lib[i].colors

// }

// color('Velvet');

function pluginFood(harga, kode, jarak) {
    let PLUGINFOOD007 = 50000; // minimal beli 70rb 50%
    let DITRAKTIRPLUGIN = 30000; // minimal beli 25rb 60%

    let minjarak = 2;
    let ongkir = 5000;
    let diskon = 0;

    let pajak = harga * 5 / 100;

    for (let i = 3; i <= jarak; i++) {
        if (!minjarak < jarak) {
            let bayar = 3000;
            ongkir += bayar
            // console.log(ongkir);
        } else {
            console.log(ongkir);
        }
    }

    if (kode == 'PLUGINFOOD007' || kode == 'DITRAKTIRPLUGIN') {
        if (kode == 'PLUGINFOOD007') {
            if (!harga < 70000) {
                if (harga*50/100 < PLUGINFOOD007) {
                    let totalPotongan = harga * 50 / 100
                    diskon = totalPotongan;
                } else {
                    diskon = PLUGINFOOD007;
                }
            }else{
                console.log("Kode tidak bisa digunakan" || 0);
            }
        } else if (kode == 'DITRAKTIRPLUGIN') {
            if (!harga < 25000) {
                if (harga*60/100 < DITRAKTIRPLUGIN) {
                    let totalPotongan = harga * 60 / 100
                    diskon = totalPotongan;
                } else {
                    diskon = DITRAKTIRPLUGIN;
                }
            }else{
                console.log("Kode tidak bisa digunakan" || 0);
            }
        }
    } else {
        let totalPotongan = harga
        console.log(totalPotongan);
    }

    console.log('harga : '+harga+
    '\n potongan : '+diskon+
    '\n biaya antar : '+ongkir+
    '\n pajak : '+pajak+
    '\n sub total : '+(harga-diskon+ongkir+pajak));        
}

pluginFood(28000, 'DITRAKTIRPLUGIN', 3)