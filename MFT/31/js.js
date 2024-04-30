let userInput = document.querySelector('#userInput');
let sourceUnit = document.querySelector("select[name='sourceUnit']");
let desinationUnit = document.querySelector("select[name='desinationUnit']");

let calculatorform = document.querySelector("#calculatorform");

calculatorform.addEventListener('submit', function(e){

    e.preventDefault();
    let result = null;
    if (sourceUnit.value == 'meter' && desinationUnit.value == 'centimeter'){
        result = userInput.value * 1000;
    }
    alert(result)
})


console.log();