function clicked() {
    alert('clicked')
}


function clicked2() {
    alert('clicked2')
}

// function change() {
//     console.log('changed)
// }

// const btn = document.getElementById('my-btn')
// btn.onclick = clicked();
// console.log({btn});

// const btn: HTMLElement = document.getElementById(elementid: 'my-btn')
// btn.addEventListener(type: 'click', clicked) ;
// console.log({btn});



const btn = document.getElementById('my-btn')
btn.addEventListener('click', clicked) ;
console.log({btn});

const btn3 = document.getElementById('my-btn3')
btn.addEventListener('click', clicked2) ;


btn3.removeEventListener('click', clicked2)