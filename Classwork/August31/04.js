let str = `The quick brown fox jumped over the lazy dog`

function findLongestWord (str){
    let strSplit = str.split(' ')
    let longestWord = "";

    for (let word of strSplit) {
        if (word.length > longestWord.length) {
            longestWord = word
        }
    }
    return longestWord
}

console.log(findLongestWord(str))