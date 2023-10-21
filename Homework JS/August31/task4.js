const str = "background-color"
function camelize(str) {
    return str
      .split('-') 
      .map(
        
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); 
  }

console.log(str);
console.log(camelize(str))