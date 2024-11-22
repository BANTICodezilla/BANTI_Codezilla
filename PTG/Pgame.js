const prompt = require("prompt-sync")();
let name = prompt("Enter your name: ");
console.log(`Welcome to the game, ${name}! 😁🤣`);

let count = 1;
let cmp = Math.floor(Math.random() * 100) + 1;
let attempData = document.getElementById("Attempt");
let userinp = document.getElementById("inp");
let subBtn = document.getElementById("Submit");
let resBtn = document.getElementById("resBtn");
let message = document.getElementById("msg");

function check() {
    let usernum = parseInt(userinp.value);
    userinp.value = ''; // Clear the input field immediately after reading its value
    if (cmp === usernum) {
        message.innerHTML = "Congratulations! You have guessed the right number!";
        message.style.color = "green";
        resBtn.style.display = "block";
    } else if (cmp < usernum) {
        message.innerHTML = "Too high! Try again.";
        message.style.color = "red";
    } else {
        message.innerHTML = "Too low! Try again.";
        message.style.color = "red";
    }
    count++;
    attempData.innerHTML = `Attempts: ${count}`;
    setTimeout(() => {
        message.innerHTML = '';
    }, 1000);
}

function restart() {
    cmp = Math.floor(Math.random() * 100) + 1;
    count = 0;
    attempData.innerHTML = `Attempts: ${count}`;
    message.innerHTML = '';
    message.style.color = '';
    resBtn.style.display = "none";
    userinp.value = '';
}

subBtn.addEventListener("click", check);
resBtn.addEventListener("click", restart);
