const circles = document.querySelectorAll(".lights");
console.log(light)

let activeLight = 0

function changeLight() {
    light[activeLight].className = "light";
    activeLight++;
    
    if(activeLight > 2) {
        activeLight = 0;
        
    }

    const currentLight = light[activeLight];
    currentLight.className.add(currentLight.getAttribute("color"))
}