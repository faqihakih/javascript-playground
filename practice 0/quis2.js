function holiday (nama){
    var referesing = ["Liburan", "Jalan - Jalan", "Olahraga"];
    // mengambil satu huruf awal 
    var say = nama.charAt(0)
    // mencari huruf a di setiap nama
    var haii = nama.includes("a")
  
    if(say === "A" || haii){
      console.log(nama + " Sedang " + referesing[0]);
    }else if (say === "F"){
        console.log(nama + " Sedang " + referesing[1]);
    }else{
      console.log(nama + " Sedang " + referesing[2]);
    }
    
  }
  
  holiday("Alip");
  holiday("Faqih");
  holiday("zada");
  holiday("Felix");
  holiday("felix");
  holiday("fifi");
  