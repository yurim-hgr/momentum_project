const loginForm = document.querySelector("#login-form");
const inputForm = document.querySelector("#login-form input");

const greeting = document.querySelector("#userGreeting");

const STRING_HIDDEN ="hidden";
const LOCALSTORAGE_KEY="username";


function handleSubmitForm(e){
    e.preventDefault(); 
    const userName = inputForm.value;
    loginForm.classList.add(STRING_HIDDEN);
    localStorage.setItem(LOCALSTORAGE_KEY, userName);

    paintGreeting(userName);
    
};

function paintGreeting (name){
    greeting.innerText = `hello ${name}`;
    greeting.classList.remove(STRING_HIDDEN);
}

const saveUserName = localStorage.getItem(LOCALSTORAGE_KEY);

if(saveUserName ===null){
    //form
    loginForm.classList.remove(STRING_HIDDEN);
    loginForm.addEventListener("submit", handleSubmitForm);
}else{
    //h1 greeting
    paintGreeting(saveUserName);
}