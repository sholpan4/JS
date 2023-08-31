function getIndexOfSymbol(str) {
    let strSplit = str.split(' ');
    index = [];

    for (let i of strSplit) {
        
        index += str.indexOf(i)
    }

    return index
}

str = `dragon`
// index = str.indexOf()

console.log(getIndexOfSymbol(str))