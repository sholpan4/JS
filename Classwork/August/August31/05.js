function getIndexOfSymbol(str) {
    let strCounter = 0
    for (let item of str){
            console.log("element " + item);
        }
        
        for (let index in str){
            console.log("index " + index);
        }
        
        for (let i  = 0; i < str.length; i++){
            if (i == i++) {
                strCounter += 1
                console.log("index: " + i + " element: " + str[i]);
                console.log(strCounter)



            }
            
        }
        
}

str = `dragonjjj`
// index = str.indexOf()

console.log(getIndexOfSymbol(str))
console.log(strCounter)