// let generatedNumber = document.getElementsByClassName("number")  //better create id
// console.log(generatedNumber)

// function generateRandomNumber(){
//     return generatedNumber.innerText = Math.ceil(Math.random(0, 100)*100);
// }



document.querySelector('.display').onmousemove = function(event) {
    event = event || window.event; 
    console.log(event); 
    document.querySelector('.x').innerHTML = event.offsetX;
    document.querySelector('.y').innerHTML = event.offsetY;
}


// const elem = document.querySelector('.display'); 
// elem.addEventListener('mousemove', function (event) {
 
//   const x = event.clientX; 
//   const y = event.clientY; 

//   console.log(`Координаты мыши: x=${x}, y=${y}`); 
// });

