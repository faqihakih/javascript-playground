/**
=========================
Array Mastery: Add Titles
=========================
[INSTRUKSI]
Function addTitle akan menerima satu parameter berupa array data orang dan akan menambahkan
title (Mr. / Ms. / Mrs.) kepada setiap orang yang ada di dalam array tersebut.
Akan diberikan 3 elemen di setiap array:
1. Name
2. Gender ('male'/'female')
3. Married (true/false)
Jika gender = 'male', maka tambahkan 'Mr.' sebelum name
Jika gender = 'female' dan married = true, maka tambahkan 'Mrs.' sebelum name
Jika gender = 'female' dan married = false, maka tambahkan 'Ms.' sebelum name
Function akan mengembalikan string berupa nama-nama yang sudah ditambahkan dengan title
ex: Mr. *****, Mrs. *****, Ms. *****, Mr. *****
[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
- Dilarang menggunakan .split, indexOf!
*/

const addTitle = (arr) => {
//  return arr
    const result = []
    for(let i=0 ; i < arr.length; i++){
        let temp;
        let isMaried = arr[i][2];
        let nama = arr[i][0]
        let gender = arr[i][1]
        if (gender === 'female' && isMaried) {
            temp = "Mrs "+nama
        }else if(gender === 'female' && !isMaried){
            temp = "Ms "+ nama
        }else{
            temp = "Mr "+ nama
        }
        result.push(temp)
    }
    return result
}

console.log(addTitle([['Sergei', 'male', true], ['Alyona', 'female', false]])); // Mr. Sergei, Ms. Alyona

console.log(addTitle([['Dimitri', 'male', false], ['Anastasia', 'female', false], ['Vladlena', 'female', true]])); // Mr. Dimitri, Ms. Anastasia, Mrs. Vladlena

console.log(addTitle([])); // No data