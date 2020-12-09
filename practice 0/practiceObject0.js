var nama = {
    nama : "faqih",
    kelas : "5b"
  };
  var alamat = {
    alamat : "tegal",
    kelas : "3A"
  }
  
  const newObj = {...nama, ...alamat} 
  
  // Object.assign(nama, alamat);
  for (const [key, value] of Object.entries(nama)) {
    console.log(`${key} ${value}`)
  }
  
  
  console.log(newObj)