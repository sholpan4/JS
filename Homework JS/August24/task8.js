let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let currentDay = 0;
  
while (confirm(`${days[currentDay]}. Хотите увидеть следующий день?`)) {
    currentDay = (currentDay + 1) % days.length;
}

alert(currentDay)