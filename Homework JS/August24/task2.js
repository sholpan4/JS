var a = Number(prompt("Введите первое число: "));
var b = Number(prompt("Введите второе число: "));
var gcd;

while (a!=b) {
    if (a>b) {
        a = a - b;
  }
    else {
        b = b - a;
  }
}
gcd = a;
// document.write(gcd);
alert(gcd)