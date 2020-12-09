const misahAngka = (angka) => {
    const jadi = angka.toString().split(0)
    let result = '';
  
    jadi.map((response) => {
      return result = result + response.split('').sort((a,b) => {return a-b}).join('')
      // result += response.split('').sort((a, b) => { return a - b }).join('')
    })
  
    console.log(result)
  
    //   const newArr = jadi.map((response) => {
    //     return response.split('').sort((a,b) => {return a-b}).join('')
    //   })
  
    // console.log(newArr.join(''))
    // const map1 = jadi[0].split('').sort(function(a,b){return a- b}).join('')
    // const map2 = jadi[1].split('').sort(function(a,b){return a- b}).join('')
    // const map3 = jadi[2].split('').sort(function(a,b){return a- b}).join('')
  
    // let newArr = [...map1, ...map2, ...map3];
  
    // jadi.sort(function(a, b){return a - b})
    // console.log(newArr.join(''))
  }
  
  misahAngka(22305234592034)