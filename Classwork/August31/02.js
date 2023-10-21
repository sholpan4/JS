let str = `welcome to the my universe`

function word(str){
    let firstLetter = str[0].toUpperCase()
    let secondWord = str.slice(1)
    return firstLetter + secondWord
}

console.log(word(str))