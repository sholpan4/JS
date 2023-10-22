window.onload = () => {
    let books = [
        {
            id: 0,

        },
    ]

    localStorage.setItem("books", JSON.stringify(books));
    console.log(localStorage.getItem('books'));
}

const addVisitorButton