function textNumber(number) {
    let first = ['Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять'];
    let second = ['Десять', 'Одинадцать', 'Двенадцать', 'Тринадцать', 'Четырнадцать', 'Пятнадцать', 'Шестнадцать', 'Семьнадцать', 'Восемьнадцать', 'Девяднадцать', 'Двадвать'];
    let third = ['Двадцать', 'Тридцать', 'Сорок', 'Пятьдесят', 'Шестьдесят', 'Семьдесят', 'Восемьдесят', 'Девяносто'];
    if (number > 0 && number <= 9) {
      return first[number - 1];
    }
    if (number >= 10 && number <= 20) {
      return second[number - 10];
    }
    if (number > 20 && number <= 99) {
      let str = `${number}`;
      str = str.split('');
      let firstNumber = str[0];
      let secondNumber = str[1];
      //return [ third[firstNumber - 2], first[secondNumber - 1] ];
      return `${third[firstNumber - 2]} ${first[secondNumber - 1]}`;
    }
  }
  alert(textNumber(7));
  alert(textNumber(20));
  alert(textNumber(55));


//   console.log(Array.from({ length: 100 }, 
//     (v, i) => i + ': ' + textNumber(i)
//   ).join('\n')); 
  
//   function textNumber(number) {
//     const dict = [
//       ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', '', 'две', '', 'четыр', 'пят', 'шест', 'сем', 'восем', 'девят'], 
//       ['', '', 'двадцать', 'тридцать', 'сорок', '', '', '', '', 'девяносто']
//     ]; 
//     if (number >= 0 && number <= 10)
//       return dict[0][number]; 
//     if (number > 10 && number <= 19)
//       return (dict[0][number] || dict[0][number - 10]) + 'надцать'; 
//     if (number >= 20 && number <= 99) {
//       const [units=0, tens] = [...('' + number)].reverse().map(Number); 
//       return [
//         tens ? dict[1][tens] || (dict[0][tens] + 'десят') : '', 
//         units ? dict[0][units] : ''
//       ].join(' '); 
//     }
//   }