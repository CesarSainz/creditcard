const completeName = document.getElementById('name') // Card name
const cardNumber = document.getElementById('number') //  Card number
const month = document.getElementById('month') // Month input
const year = document.getElementById('year') // Year input
const cvv = document.getElementById('cvv') // CVV input
const form = document.getElementById('form') // form
const errorElement = document.getElementById('error') //error displayed
const errorMessages = {
    fill: 'Please fill out all fields!',
    name:'Not a valid name',
    number:'Wrong format, numbers only!',
    cvv:'CVV number invalid!',
    date: 'Not a valid date',
}

//Error handling functions
function errorHandling(errorMessage, elementId, messagesArr){
    messagesArr.push(errorMessage)
    var error = document.getElementById(elementId)
    index = messagesArr.indexOf(errorMessage)
    error.innerText = messagesArr[index]
}

function deletingErrors(variable){
    var error = document.getElementById(variable)
    error.innerText = ''
}

//Submit event listener
form.addEventListener('submit', (e) => {
        let messages = []

        //CHECKING IF EVERY INPUT IS FILLED CORRECTLY
        if(!(completeName.value === '' || cardNumber.value === '' || month.value === '' || year.value === '' || cvv.value === '')){
            deletingErrors('filling-error')
        }
        else{
            errorHandling(errorMessages.fill,'filling-error', messages);
            e.preventDefault()
        }

        //CHECKING IF NAME IS NOT A NUMBER
        if((isNaN(+completeName.value))){
        deletingErrors('name-error')
        }
        else{
            errorHandling(errorMessages.name,'name-error', messages);
            e.preventDefault()
        }

        //CHECKING IF CONDITIONS FOR CARD NUMBER INPUT ARE CORRECT
        if(!(cardNumber.value.length<16 || isNaN(+cardNumber.value))){
            deletingErrors('card-error')
        }
        else{
            errorHandling(errorMessages.number,'card-error', messages);
            e.preventDefault()
        }

        //CHECKING IF CONDITIONS FOR CVV INPUT ARE CORRECT
        if(!(cvv.value.length<3 || isNaN(+cvv.value))){
            deletingErrors('cvv-error')
        }
        else{
            errorHandling(errorMessages.cvv,'cvv-error', messages)
            e.preventDefault()
        }

        //CHECKING IF CONDITIONS FOR DATE INPUTS ARE CORRECT
        if(!(year.value.length<2 || month.value.length<2 || isNaN(+year.value) || isNaN(+month.value))){
            deletingErrors('date-error')
        }
        else{
            errorHandling(errorMessages.date,'date-error', messages)
            e.preventDefault()
        }
    }
);
//Typing event listeners

completeName.addEventListener('keyup', copyText);
cardNumber.addEventListener('keyup', copyTextNumber);
month.addEventListener('keyup', copyText);
year.addEventListener('keyup', copyText);
cvv.addEventListener('keyup', copyText);

//Copy text to card functions

function copyText(){
    var cardOutput = document.getElementById('card-output')
    cardOutput.innerText = completeName.value

    var monthOutput = document.getElementById('month-output')
    monthOutput.innerText = month.value

    var yearOutput = document.getElementById('year-output')
    yearOutput.innerText = year.value

    var cvvOutput = document.getElementById('cvv-output')
    cvvOutput.innerText = cvv.value
}

var block1 = ''
var block2 = ''
var block3 = ''
var block4 = ''

function copyTextNumber(){

    var numberOutput = document.getElementById('number-output')

//Adding ifs per block of numbers for further card id implementation

    if(cardNumber.value.length%4 === 0 && cardNumber.value.length<=16 && cardNumber.value.length != 0){
    
        if(cardNumber.value.length===4){
            block1 = cardNumber.value.substring(0,4)
            block2 = ''
            block3 = ''
            block4 = ''
            numberOutput.innerHTML = block1 + ' ' + block2 + ' ' + block3 + ' ' + block4
        }

        if(cardNumber.value.length===8){
            block2 = cardNumber.value.substring(4,9)
            block3 = ''
            block4 = ''
            numberOutput.innerHTML = block1 + ' ' + block2 + ' ' + block3 + ' ' + block4
        }

        if(cardNumber.value.length===12){
            block3 = cardNumber.value.substring(8,13)
            block4 = ''
            numberOutput.innerHTML = block1 + ' ' + block2 + ' ' + block3 + ' ' + block4
        }

        if(cardNumber.value.length===16){
            block4 = cardNumber.value.substring(12,16)
            numberOutput.innerHTML = block1 + ' ' + block2 + ' ' + block3 + ' ' + block4
        }
     
    }
    if(cardNumber.value.length === 0 ){
        numberOutput.innerText = ''
    }
}