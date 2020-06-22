const greetingForm = document.querySelector(".jsGreetingForm"),
  greetingInput = greetingForm.querySelector("input"),
  greeting = document.querySelector(".jsGreetingText");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text){
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = greetingInput.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName(){
  greetingForm.classList.add(SHOWING_CN);
  greetingForm.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
  greetingForm.classList.remove(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
  greeting.classList.add(SHOWING_CN);
}

function loadName(){
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null || currentUser == ""){
    askForName();
  }else{
    paintGreeting(currentUser);
  }
}

function init(){
  loadName();
}

init();