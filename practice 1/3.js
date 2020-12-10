/**
=====================================
Modular Functions: Calculate Number in Object
=====================================
 
[INSTRUKSI]
 
Diberikan function kali, tambah, bagi, kurang, dan calculate
 
Implementasikan function calculate untuk menghitung angka-angka yang ada di dalam object,
 operator perhitungan tersedia di dalam object.
ASUMSI:
 - keyName operand1, operand2 dan operator selalu ada
 - value dari operand1 dan operand2 selalu number
 - value dari operator berupa string: '+', '-', '*' atau '/'
 
 Function calculate akan me-return sebuah array yang berisi hasil 
 perhitungan dari object tersebut.
 
contoh 1:
input: [ {
              operand1: 5,
              operand2: 10,
              operator: '*'
            },
            {
              operand1: 3,
              operand2: 10,
              operator: '-'
            },
            {
              operand1: 3,
              operand2: 10,
              operator: '/'
            }
          ];
output: [50, -7, 0.3]
 
contoh 2:
input: []
output: []
 
*/

const calculate = (params) => {
    let result = [];
    for (let i = 0; i < params.length; i++) {
        let hasil;
        let a = params[i]['operand1'];
        let b = params[i]['operand2'];
        let operator = params[i]['operator'];
        if (operator == "*") {
            hasil = a * b;
        } else if(operator == "-"){
            hasil = a - b;
        } else if(operator == "/"){
            hasil = a / b;
        }else{
            hasil = a + b;
        }
        result.push(hasil);
    }
    return result;
}


console.log(calculate([
    { operand1: 5, operand2: 10, operator: '*' },
    { operand1: 3, operand2: 10, operator: '-' }
]));
//[50, -7]

console.log(calculate([
    { operand1: 10, operand2: 5, operator: '/' },
    { operand1: 3, operand2: 10, operator: '+' }
]));
//[2, 13]

console.log(calculate([]));
//[]