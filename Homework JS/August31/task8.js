function getUrlInfo(url) {
    let arr1;
    let protocol;
    let domain;
    let arr2;
    let way;
    arr1 = url.split("://");
    for (let index = 0; index < arr1.length; index++) {
        protocol = arr1[0];
        arr2 = arr1[1].split("/"); 
        domain = arr2[0];
    }   
    
    for (let index = 1; index < arr2.length; index++) {
            way += arr2[index];
            way += "/";            
    }              
    
return "Информация\nпротокол: "+ protocol
        + "\nдомен: " + domain + "\nпуть: " + way;
} 
  
function showPrompt() {
    let url = prompt("Ввести URL: ");
    alert(getUrlInfo(url));
}

showPrompt()