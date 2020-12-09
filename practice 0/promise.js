let janjian = new Promise ((resolve, reject) => {
    setTimeout(() => {
      let keadaan = 'senggang'
      console.log(keadaan)
      let cuaca = 'cerah'
      if(keadaan === 'senggang' && cuaca === 'cerah'){
         console.log('Yes Aku senggang bisa janjian')
      }else{
          console.log('Maaf ngga bisa keadaan ngga memungkinkan')
      }
    },2000)
    let success = true
    if(success){
      resolve('Berhasil')
    }else{
      reject(new Error('Janji dibatalkan'))
    }
  })
  
  const janjinya = async () => {
    try{
      let hasil = await janjian
  console.log(hasil)
    }catch(err){
  console.log(err)
    }
  }
  
  janjian
  .then((result) =>{
    console.log(result)
  })
  .catch((error) => {
    console.log(error)
  })
  