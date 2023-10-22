window.onload = () => {
    const editModal = document.getElementById('edit-modal');
    const add = document.querySelector('.add');
    const closeModal = document.querySelector('.close-btn');

    const fullName = document.querySelector('#full-name');
    const phoneNumber = document.querySelector('#phone-number');


    addNewVisitor() {
        validateVisitorData();

    }

    validateVisitorData() {
        if (fullName === '' || phoneNumber === '') return alert('Please fill in the blank');

    }

    addEventListener
}