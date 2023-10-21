// const str = 'БОЛЬШИЕ БУКВЫ на маленькие, маленькие – НА БОЛЬШИЕ 123456789';

// function changeRegister (str) {
// let upperWord = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
// let lowerWord = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
// let number = '1234567890';
// let result = [];
  
//   for(var i = 0; i < str.length; i++) {
//     if(upperWord.includes(str[i])) {
//       result.push(str[i].toLowerCase());
//     }
//     else if(lowerWord.includes(str[i])) {
//       result.push(str[i].toUpperCase());
//     }
//     else if(number.includes(str[i])) {
//       result.push(str[i].replace('_'));
//     }
//     else {
//       result.push(str[i]);
//     }
//   }
//   return result.join('');
// };

// console.log(str);
// console.log(changeRegister(str));


const str = 'БОЛЬШИЕ БУКВЫ на маленькие, маленькие – НА БОЛЬШИЕ 123456789';

function changeRegister (str) {
let result = [];
  
  for(var i = 0; i < str.length; i++) {
    if(/^\d+$/.test(str[i])) {
      result.push('_');
    }
    else if(str[i].toUpperCase() === str[i]) {
      result.push(str[i].toLowerCase());
    }
    else if(str[i].toLowerCase() === str[i]) {
      result.push(str[i].toUpperCase());
    }
    else {
      result.push(str[i]);
    }
  }
  return result.join('');
};

console.log(str);
console.log(changeRegister(str));