const display = document.querySelector(".screen");
const buttons = document.querySelectorAll("button")
const specialCharacter = ["%", "/", "*", "+", "-", "="];
let output ="";

/** 
 * Adding function to calculate based on button clicked.
*/
const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC") {
       output = ""; 
    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);
    } else {
        if (output === "" && specialCharacter.includes(btnValue)) return;
        output += btnValue;
    }

    display.value = output;
};

/**
 * Adding event listener to buttons and calling click
 */
buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});