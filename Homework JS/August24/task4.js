var number = prompt("Введите число : ");
function getDigitAmount(n) {
    var c = 1;
    while (( n /= 10)>=1)
        c++;
    return (c);
}
alert(getDigitAmount(number));