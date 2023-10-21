// onload = function() {
//     var layer = document.getElementById('layer'),
//     tb = document.getElementById('tb'),
//     tds = tb.getElementsByTagName('td'),
//     tdsCount = tds.length;
//     for ( ; tdsCount-- ; ) {
//     (function(tdsCount) {
//         tds[tdsCount].onmouseover = function() {
//         layer.style.backgroundColor = getComputedStyle(this, '').backgroundColor;
//         };
//     })(tdsCount);
//     }
// }


// function newColor(idCell) {
//     eval('document.all.'+idCell+'.style.background = "grey"');
//     eval('document.getElementById("' + idCell + '").style.background = "grey"');
//     }
    
//     function backColor(idCell) {
//     eval('document.all.'+idCell+'.style.background = "white"');
//     eval('document.getElementById("' + idCell + '").style.background = "white"');
//     }


// .block {
//     background: #fff;
// }
// .color1 {
//     background: #000;
// }

// var block = document.querySelector('.block');

// block.addEventListener('mouseenter', function () {
//     block.classList.add('color1');
// });
// block.addEventListener('mouseleave', function () {
//     block.classList.remove('color1');
// });

// document.getElementById("somediv").onmouseover = function() {
//     this.style.backgroundColor = "green";
// }


// example.onmouseover = function() {
// example.style.background= "red";
// };
    
// example.onmouseleave = function() {
// example.style.background= "yellow";
// };