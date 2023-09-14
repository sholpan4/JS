const str = ("sdf!#hjh12321sda11wwj jkdjkas$jl1");

function getSumNumbers(str) {
    let sumNumbers = str.match(/\d+/g).join('').length;
    return sumNumbers 
}

function getSumLetters(str){
    let sumLetters = str.match(/[a-z]/gi).join('').length;
    return sumLetters
}

// function getSumSign(str){
//     const sumSigns = str.match(/...../gi).join('').length;
//     return sumSigns
// }

    console.log('Количество цифр:',  getSumNumbers(str));
    console.log('Количество букв:', getSumLetters(str));
    // console.log('Количество знаков:', getSumSign(str))


// function symbolAll (str) {
//     str = str.split(' ').join('');
//     console.log(str)

//     let sumNumbers = '';
//     let sumLetters = '';
//     let sumSigns = '';

//     for (const character of str){
//         if (parseIn(character)) {
//             sumNumbers += character;
//         }
//         else if (/[a-z]/i.test(character)){
//             sumLetters += character
//         }
//         else {
//             sumSigns += character
//         }
//     }

//     console.log('Количество цифр:', sumNumbers)
//     console.log('Количество букв:', sumLetters)
//     console.log('Количество символы:', sumSigns)
// }

// symbolAll('sdf!"№jhjh12321sda11wwj jkdjkasjl1')