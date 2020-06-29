var fieldX = document.getElementById('fieldX');
var fieldY = document.getElementById('fieldY');
var resultField = document.getElementById('resultField');
var form = document.getElementById('theForm')

form.addEventListener('submit', function(event){
    if(!fieldX.value || !fieldY.value){
        alert("Can't calc it without numbers");
    }
    var x = parseInt(fieldX.value);
    var y = parseInt(fieldY.value);
    
    var result = x/y;
    var percet = result * 100;
    resultField.innerText = percet + "%";
    event.preventDefault();
    
});