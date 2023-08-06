const display = document.querySelector(".screen");
const buttons = document.querySelectorAll("button")


const calculate = (btnValue) => {
    console.log(btnValue);
};

/**
 * Adding event listener to buttons and calling click
 */
buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});