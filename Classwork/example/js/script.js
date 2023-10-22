// Ссылка на таблицу с посетителями
const table = document.querySelector(".table tbody");

// Кнопка "New visitor"
const addVisitorButton = document.querySelector(".add_visitor");

// Обработчик события для кнопки "New visitor"
addVisitorButton.addEventListener("click", () => {
  // Запрос на ввод данных о новом посетителе
  const name = prompt("Enter the visitor's name:");
  const phone = prompt("Enter the visitor's phone:");

  if (name && phone) {
    // Создание новой строки в таблице
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <th scope="row">${table.children.length + 1}</th>
      <td>${name}</td>
      <td>${phone}</td>
      <td><button style="border: none;"><img src="C:\Users\УсовГ\Desktop\exam\pngwing.com.PNG" alt="da" width="25"></button></td>
    `;

    // Добавление новой строки в таблицу
    table.appendChild(newRow);
  }
});

// Обработчик события для редактирования посетителя
table.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") {
    // Находим родительскую строку
    const row = event.target.closest("tr");

    // Получаем данные текущего посетителя
    const id = row.querySelector("th").textContent;
    const name = row.querySelector("td:nth-child(2)").textContent;
    const phone = row.querySelector("td:nth-child(3)").textContent;

    // Запрос на ввод новых данных
    const newName = prompt("Edit the visitor's name:", name);
    const newPhone = prompt("Edit the visitor's phone:", phone);

    if (newName && newPhone) {
      // Обновление данных в таблице
      row.querySelector("td:nth-child(2)").textContent = newName;
      row.querySelector("td:nth-child(3)").textContent = newPhone;
    }
  }
});



function addVisitor() {
  const name = prompt("Enter the visitor's name:");
  const phone = prompt("Enter the visitor's phone:");

  if (name && phone) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <th scope="row">${table.children.length + 1}</th>
        <td>${name}</td>
        <td>${phone}</td>
        <td>
          <button style="border: none;" onclick="editVisitor(this)" data-id="${table.children.length + 1}">
            <img src="C:\Users\УсовГ\Desktop\exam\pngwing.com.PNG" alt="da" width="25">
          </button>
        </td>
      `;

    table.appendChild(newRow);
  }
}

function editVisitor(button) {
  const row = button.closest("tr");
  const id = row.querySelector("th").textContent;
  const name = row.querySelector("td:nth-child(2)").textContent;
  const phone = row.querySelector("td:nth-child(3)").textContent;

  const newName = prompt("Edit the visitor's name:", name);
  const newPhone = prompt("Edit the visitor's phone:", phone);

  if (newName && newPhone) {
    row.querySelector("td:nth-child(2)").textContent = newName;
    row.querySelector("td:nth-child(3)").textContent = newPhone;
  }
}
