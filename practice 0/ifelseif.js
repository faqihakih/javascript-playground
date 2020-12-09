function checkGrade(nilai) {
    if (nilai > 100) {
      console.log("Anda Terlalu pintar!")
    } else if (nilai <= 100 && nilai > 79) {
      console.log("A");
    } else if (nilai <= 79 && nilai >= 65) {
      console.log("B");
    } else if (nilai < 65 && nilai >= 50) {
      console.log("C");
    } else {
      console.log("D");
    }
  }
  
  checkGrade(100)
  checkGrade(79)
  checkGrade(65)
  checkGrade(40)
  checkGrade(101)