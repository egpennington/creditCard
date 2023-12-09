const cardNumOutput = document.getElementById("card-num-output-el")
const cardNumInput = document.getElementById("card-num-input-el")
const cardHolderOutput = document.getElementById("card-holder-output-el")
const cardHolderInput = document.getElementById("card-holder-input-el")
const monthInput = document.getElementById("month-input-el")
const monthOutput = document.getElementById("month-output-el")
const yearInput = document.getElementById("year-input-el")
const yearOutput = document.getElementById("year-output-el")
const cvcInput = document.getElementById("cvc-input-el")
const cvcOutput = document.getElementById("cvc-output-el")
const messageError = document.getElementById("message-error")

 
const submitBtn = document.getElementById("submit-btn")
const messageEl = document.getElementById("message-el")

submitBtn.addEventListener("click", ()=> {    
    messageEl.innerHTML = `
        Thank you ${cardHolderInput.value}, your information has been entered.
        `
        // clearInputFields()
})

// number input
cardNumInput.addEventListener('input', updateCardNum)

function updateCardNum() {
    let cardNumValue = cardNumInput.value

    // Remove non-numeric characters and restrict length
    const numericCardNum = cardNumValue.replace(/\D/g, '')
    cardNumValue = numericCardNum.slice(0, 16)
    cardNumOutput.textContent = formatCardNumber(cardNumValue)
  }

  // Format the numeric card number with spaces every four characters
  function formatCardNumber(cardNum) {    
    return cardNum.replace(/(\d{4})(?=\d)/g, '$1 ')
  }

// Name input
cardHolderInput.addEventListener("input", updateCardHolder)

function updateCardHolder() {
    const cardHolderValue = cardHolderInput.value
    cardHolderOutput.textContent = cardHolderValue
}

// month and year input
monthInput.addEventListener("input", function() {
    monthOutput.textContent = monthInput.value
})

yearInput.addEventListener("input", function() {
    yearOutput.textContent = yearInput.value
})

cvcInput.addEventListener("input", function() {
    cvcOutput.textContent = cvcInput.value
})

function clearInputFields() {
    cardHolderInput.value = ""
    cardNumInput.value = ""
    monthInput.value = ""
    yearInput.value = ""
    cvcInput.valule = ""
}

// submitBtn.addEventListener("click", ()=> { 
       
//     messageEl.innerHTML = `
//         Thank you ${cardHolderInput.value}, your information has been entered.
//         `
//         clearInputFields()
// })

submitBtn.addEventListener("click", () => {
    if (
        cardHolderInput.value.trim() !== "" &&
        cardNumInput.value.trim() !== "" &&
        monthInput.value.trim() !== "" &&
        yearInput.value.trim() !== "" &&
        cvcInput.value.trim() !== ""
    ) {
        messageEl.innerHTML = `Thank you ${cardHolderInput.value}, your information has been entered.`;
        clearInputFields();
    } else {
        // Clear the message if any field is empty
        messageEl.innerHTML = "";
        // Display an error message or take any appropriate action
        messageError.textContent = "Please fill out all fields before submitting."
        setTimeout(() => {
            messageError.textContent = "";
        }, 2000)
                
        // alert("Please fill out all fields before submitting.")
    }
})


