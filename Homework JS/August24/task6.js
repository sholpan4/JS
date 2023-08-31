let repeat = true;

while (repeat) {
  const num1 = Number(prompt("Введите первое число:"));
  const num2 = Number(prompt("Введите второе число:"));
  const sign = prompt("Введите знак (+, -, *, /):");
  let result;

  for (sign) {
    if "+":
      result = num1 + num2;
      break;
    if "-":
      result = num1 - num2;
      break;
    if "*":
      result = num1 * num2;
      break;
    if "/":
      result = num1 / num2;
      break;
    else:
      alert("Некорректный знак!");
      continue;
  }

  alert(`Результат: ${result}`);
  repeat = confirm("Хотите решить еще один пример?");
}