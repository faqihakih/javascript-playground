/*
[INSTRUKSI]
Function addEvenOdd akan menerima satu parameter berupa array of number. 
Kelompokkanlah hasil penjumlahan bilangan yang genap dan bilangan yang ganjil dan return array 2 dimensi 
di mana array pertama merupakan hasil penjumlahan angka ganjil dan array selanjutnya adalah hasil penjumlahan angka genap
Contoh:
input: [3, 5, 7, 8]
output: [[15], [8]]
input: [2, 4, 6, 10]
output: [[0], [22]]
input: []
output: [[0], [0]]
[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
- Dilarang menggunakan sintaks eval()!
*/

const addEvenOdd = (arr) => {
    // console.log(arr);
    if(arr.length === 0){
        console.log(arr);
    }else {
        let sumEven = 0;
        let sumOdd = 0 ;
        for(let i in arr){
            if(arr[i] % 2 === 0){
                // console.log(`ini genap ${arr[i]}`);
                sumEven += arr[i]
            }else{
                sumOdd += arr[i]
                // console.log(`ini ganjil ${arr[i]}`);
            }
        }
        console.log(`${sumOdd}, ${sumEven}`);
    }
}

addEvenOdd([3,5,7,8])
addEvenOdd([2,4,6,10])
addEvenOdd([])