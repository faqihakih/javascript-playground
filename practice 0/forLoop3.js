function printPlugin(num) {
    for (var i = 1; i <= num; i++) {
        if (i % 2 == 0 && i % 5 == 0) {
        console.log("Plugin")
        }else if (i % 2 == 0) {
        console.log("Plug");
        } else if (i % 5 == 0) {
        console.log("In");
        } else {
        console.log(i);
        }
    }
}
printPlugin(10)