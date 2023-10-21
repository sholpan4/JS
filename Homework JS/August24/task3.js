let number = prompt("Введите число для рачета его делителей");
let str='';
for (let n = 1; n <= number; n++){
    let a = number % n
    if(a==0){
    str += n + ', '
    }
}
alert(str)