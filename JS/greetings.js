// const loginForm = document.querySelector("#login-form"); // 아래와 같음
// const loginForm = document.getElementById("login-form");

// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
// const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

/*
모든 EventListener function의 첫벗째 argument는 항상 지금 막 벌어진 일들에 대한 정보가 된다.
그리고 JS가 나에게 그 정보를 제공한다. 
argument 공간만 제공하면 JS가 알아서 방금 일어난 event에 대한 정보를 지닌 argument를 채워넣을 것이다.
*/
const HIDDEN_CLASSNAME = "hidden"; // 일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용한다
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    // console.dir("Hello! " + loginInput.value);
    // console.log("button clicked");

    event.preventDefault(); // prenentDefault : event의 기본 행동 등을 발생하지 않도록 막는다. ex) form을 submit 했을 때 새로고침을 막는다
    // const username = loginInput.value;
    // if (username === "") {
    //     alert("Please write your name");
    // } else if (username.length > 15) {
    //     alert("Your name is too long");
    // }
    // console.log(tomato);
    // console.log(loginInput.value);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value; // 아래에 username에 loginInpu.value로 합칠 수 있음
    localStorage.setItem(USERNAME_KEY, username); // console -> localStorage.(removeItem or getItem or setItem)("username")
    // console.log(username);
    // greeting.innerText = "Hello " + username; // 아래와 같음
    paintGreetings(username); // 따로 인자를 받을 필요가 없음
}

// function handleLinkClick(event) { // handleLinkClick({information about the event that just happended});
//     event.preventDefault();
//     console.dir(event);
//     // alert("clicked!");
// }

// loginButton.addEventListener("click", handleLoginButton);
// loginForm.addEventListener("submit", onLoginSubmit); // if 구문으로 이동
// link.addEventListener("click", handleLinkClick);

function paintGreetings(username) { // 따로 인자를 받을 필요가 없음
    // const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`; // `~~~${변수명}~~~`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
// console.log(savedUsername);
if (savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGreetings(savedUsername); // 따로 인자를 받을 필요가 없음
}

