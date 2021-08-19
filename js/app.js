
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        // console.log('got 3 digit and calling again', pin)
        return getPin();
    }
}

function generatePin() {
    const pin = getPin()
    document.getElementById('display-pin').value = pin;
}

document.getElementById("key-pad").addEventListener('click', function (event) {

    const number = event.target.innerText;
    const clecInput = document.getElementById("typed-numbers");

    if (isNaN(number)) {
        if (number == 'C') {
            clecInput.value = '';
        }
    }


    else {


        const previousNumber = clecInput.value;
        const newNumber = previousNumber + number;
        clecInput.value = newNumber;


    }



});

function verifyPin() {
    const pinGenerate = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById("typed-numbers").value;

    const successMessage = document.getElementById("notify-success");
    const failError = document.getElementById("notify-fail");
    if (pinGenerate == typedNumbers) {

        successMessage.style.display = 'block';
        failError.style.display = 'none'
    }
    else {

        failError.style.display = 'block'
        successMessage.style.display = 'none';
    }
}