const showMonth = (err, month) => {
    console.log(err === null ? month.map(res => res).join('\n') : err)
   
    let namaBulan = prompt("Masukan Nama Bulan")
    if(namaBulan !== null){
    let lower = month.map(res => res.toLowerCase())
    let isExist = lower.includes(namaBulan.toLowerCase())
    console.log(isExist ? namaBulan+" Data Found" : namaBulan+" Data Not Found")
    }
   }
   const getMonth = (callback) =>{
     setTimeout(()=>{
       let error = false
       let month = ['Januari','Febuari','March','April',
       'May','Juni','July','August','September','October','November',
       'Desember']
       
       if(!error){
         callback(null, month);
       }else{
         callback(new Error('Sorry Data Not Found'),[])
       }
     },1000)
   }
   getMonth(showMonth)