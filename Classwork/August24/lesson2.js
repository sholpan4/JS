// const arr = [1, 2, 3, "text", true];
// console.log(arr)
// console.log(arr[3])

// for (let item of arr){
//     console.log("element " + item);
// }

// for (let index in arr){
//     console.log("index " + index);
// }

// for (let i  = 0; i < arr.length; i++){
//     console.log("index " + i + " element " + arr[i]);
// }


let arr2 = [1, "hello", 3, 4, 4, 5, 4, true];
// let arr3 = [];
// let arr4 = arr2?.concat(arr3) 




// arr2.forEach((el) => {
//     arr3.push(el);
// });
// arr2.push(6, 8, 9)
// arr2.pop(4)
// arr2.unshift(7)
// arr2.shift(1)
console.log({arr2})

arr2.forEach((el) => {
    console.log("index - " + arr2.indexOf(el) + " of element " + el);
    })    
console.log(arr2[1])
console.log(arr2.indexOf("hello"))