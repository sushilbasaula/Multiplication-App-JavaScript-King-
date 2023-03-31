const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

// note: Math.random is a function, so we need to have a parenthesis after this

const questionEl = document.getElementById("question");

const formEl = document.getElementById("form");

const inputEl = document.getElementById("input");

const scoreEl = document.getElementById("score");

questionEl.innerText = `What is ${num1} multiplied by ${num2}?`;

// Note: Since num1 is a variable we need to add a $ sign and use curly braces ${}.
let score = JSON.parse(localStorage.getItem("score"));

// Note: When we Submit, the page gets reloaded, so we can put the score value in local storage of the browser

if (!score) {
  score = 0;
}

scoreEl.innerText = `score: ${score}`;

questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

const correctAns = num1 * num2;

formEl.addEventListener("submit", () => {
  const userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
