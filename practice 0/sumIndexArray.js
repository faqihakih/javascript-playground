function count(a, b) {
    return a + b;
  }
  function arrayPlusArray(arr1, arr2) {
    let newarr1 = arr1.reduce(count)
    let newarr2 = arr2.reduce(count)
    let total = newarr1 + newarr2
    console.log(total)
    // return arr1 + arr2; //something went wrong
  }
  
  arrayPlusArray([1,2,3],[4,5,6])