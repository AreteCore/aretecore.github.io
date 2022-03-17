//listener for button runns fuction


    //pulls value from temperature and stores as variable
    //does conversion and stores it as other variable
    //displays both variables under relative headings based on radio selection
    //removes entered value
let fahrenheit = 32
let celsius = 0

function clearValues() {
    fahrenheit = 32
    celsius = 0
}

function inputClick() {
    clearValues()
    pushValues()
    enableButtons()
}

function celsiusButtonClick() {
    convertToCelsius()
    pushValues()
    disableButtons()
}

function fahrenheitButtonClick() {
    convertToFahrenheit()
    pushValues()
    disableButtons()
}

function convertToCelsius() {
    fahrenheit = document.getElementById("temperature-input").value
    celsius = Math.round((fahrenheit - 32) * 5/9)
}

function convertToFahrenheit() {
    celsius = document.getElementById("temperature-input").value
    fahrenheit = Math.round((celsius * 9/5) + 32)
}

function pushValues() {
    document.getElementById("celsius-display").innerHTML = celsius
    document.getElementById("fahrenheit-display").innerHTML = fahrenheit
}

function disableButtons() {
    var allButtons = document.querySelectorAll('button')
    for(var i = 0; i < allButtons.length; i++) {
    allButtons[i].disabled = true;
   }
}
  
function enableButtons() {
    var allButtons = document.querySelectorAll('button')
    for(var i = 0; i < allButtons.length; i++) {
    allButtons[i].disabled = false;
    }
}

// function testing() {
//     // alert()
//     convertToFahrenheit()
//   console.log(celsius, fahrenheit)
//     // disableButtons()
// }

document.querySelector('#celsius').onclick = celsiusButtonClick;
document.querySelector('#fahrenheit').onclick = fahrenheitButtonClick;
// document.querySelector('#testing').onclick = testing;
document.querySelector('#temperature-input').onclick = inputClick;