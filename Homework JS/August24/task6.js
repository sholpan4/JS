let repeat = true;

while (repeat) {
  const num1 = Number(prompt("Введите первое число:"));
  const num2 = Number(prompt("Введите второе число:"));
  const sign = prompt("Введите знак (+, -, *, /):");
  let result;

  switch (sign) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      alert("Некорректный знак!");
      continue;
  }

  alert(`Результат: ${result}`);
  repeat = confirm("Хотите решить еще один пример?");
}