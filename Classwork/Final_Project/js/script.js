// window.onload = () => {
//     let books = [
//         {
//             id: 0,

//         },
//     ]

//     localStorage.setItem("books", JSON.stringify(books));
//     console.log(localStorage.getItem('books'));
// }

// const editModal = document.getElementById('edit-modal');
// const add = document.querySelector('add')









const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
})