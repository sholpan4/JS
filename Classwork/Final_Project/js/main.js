window.onload = () => {
    const editModal = document.querySelector('.edit-visitor');
    const add = document.querySelector('.btn');
    const save = document.querySelector('.save') 
    const closeModal = document.querySelector('.close-btn');
    
    add.addEventListener('click', function() {
        editModal.style.display = 'block';
    })
    
    closeModal.addEventListener('click', function() {
        editModal.style.display = 'none';
    })
 
    save.addEventListener('click', function () {  
        // Get input values  
        const fullName = document.querySelector('#full-name').value;
        const phoneNumber = document.querySelector('#phone-number').value;  
         
        // Get the table and insert a new row at the end  
        let table = document.querySelector(".table");  
        let newRow = table.insertRow(table.rows.length);  
     
        // Insert data into cells of the new row  
        //newRow.insertCell(0).innerHTML = <th scope="row">${id}</th> 
        newRow.insertCell(1).innerHTML = fullName;  
        newRow.insertCell(2).innerHTML = phoneNumber;  
        
         
        // Clear input fields  
        clearInputs();  
    }) 
     
    function clearInputs() {  
        document.querySelector("#full-name").value = "";  
        document.querySelector("#phone-number").value = "";  
    }

}
