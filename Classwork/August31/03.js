let str = `kayak`

function palindrome(str){
    return str.split('').reverse().join('') == str
}
console.log(str)
console.log(palindrome(str))