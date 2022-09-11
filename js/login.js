const loginContainer = document.querySelector("#login-container");
const loginBtn = document.querySelector("#login-form button");
const loginInput = document.querySelector("#login-form input");
const userContainer = document.querySelector("#user-container");
const greetings = document.querySelector(".greetings");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(e) {
  e.preventDefault();
  const userName = loginInput.value;
  loginContainer.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreetings(userName);
}

function paintGreetings(userName) {
  greetings.innerText = `Hello, ${userName}! `;
  userContainer.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginContainer.classList.remove(HIDDEN_CLASSNAME);
  loginContainer.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUserName);
  userContainer.classList.remove(HIDDEN_CLASSNAME);
}
