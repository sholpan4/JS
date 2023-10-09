// let monoline=(wrd)=> wrd.split('\n').join(' ');
// const monoline = (...strings) => [...strings].join("");
// //console.log(monoline("n", "o"));

function getString(...strings) {
    let n = strings.length;
    let newText = "";
    for (let i = 0; i < n; i++) {
        let text = strings[i];
        newText += text;
    }
    return newText;
}
 
function getString() {
    let n = prompt("Ввести количество строк, которое нужно добавить: ");
    let strings = [];
    for (let i = 1; i <= n; i++) {
        let text = prompt("Ввод строки №" + i + " : ");
        strings.push(text);
    }
    alert(getString(...strings));
}
 
getString();
