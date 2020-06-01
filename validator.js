function validateCreditCard(creditCardNumber) {
    let sum = 0;
    const cardNumber = Array.from(creditCardNumber, x => parseInt(x, 10));
    if(cardNumber.length < 1) {
        return false;
    };
    cardNumber.reverse();
    for (let i = 1; i < cardNumber.length; i +=2) {
        let doubledNumber = 0;
        doubledNumber = cardNumber[i] * 2;
        if (doubledNumber > 9) {
         doubledNumber -= 9;
         sum += doubledNumber;
        } else {
         sum += doubledNumber;
        }
    }
   for (let i = 0; i < cardNumber.length; i +=2) {
     sum += cardNumber[i];
   }
    if (sum % 10 === 0) {
     return   true;
    } else {
        return false;
    }
}


function validate() {
    const toValidate = document.getElementById("validator").value;
    const result = validateCreditCard(toValidate);
        if(result === true) {
         document.getElementById("output").style.display = "block";
         return document.getElementById("output").innerHTML = "Valid";
        } else {
         document.getElementById("output").style.display = "block";
         return document.getElementById("output").innerHTML = "Invalid";
        }
} 

function refresh() {
    document.getElementById("validator").value = ""
    document.getElementById("output").innerHTML = ""
    document.getElementById("output").style.display = "none";
  }