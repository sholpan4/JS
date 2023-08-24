let myVar = prompt("Enter your name (name can't contain digits): ");
const str = myVar;
const newstr = str.replaceAll("0", "").replaceAll("1", "").replaceAll("2", "").replaceAll("3", "").replaceAll("4", "").replaceAll("5", "").replaceAll("6", "").replaceAll("7", "").replaceAll("8", "").replaceAll("9", "");

alert(newstr)