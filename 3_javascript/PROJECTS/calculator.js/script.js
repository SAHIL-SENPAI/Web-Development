const button = document.querySelector("button");
button.addEventListener("click", ()=>{
    const num1 = Number(document.getElementsByClassName("First")[0].value)
    const num2 = Number(document.getElementsByClassName("Second")[0].value)
    const operation = document.getElementsByClassName("Operation")[0].value;
    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            break;
        default:
            result = "Invalid operation";
    }

    const ans = document.getElementsByClassName("result")[0];
    ans.innerHTML = result;

})