const toDoForm = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input"); // 아래와 같음
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo() {
    // console.dir(event.target);
    // console.log(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    // console.log(li.id);
    li.remove();
    // console.log(typeof li.id);
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {
    // console.log("i will");
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span); // li는 span이라는 자식을 가지게 되었다.
    li.appendChild(button);
    // console.log(li);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; // input의 현재 value를 새로운 변수에 복사하는 것이다.
    toDoInput.value = ""; // newTodo 변수와는 상관없음
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj); // 입력값을 paintToDo에 넣어서 호출
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item) {
//     console.log("this is the turn of", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);

if (savedToDos /* !== null */) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    // console.log(parsedToDos);
    // parsedToDos.forEach(sayHello);
    // => : 화살표 함수(arrow function)
    // parsedToDos.forEach((item) => console.log("this is the turn of", item)); // parsedToDos의 각각의 item에 대해서 console.log를 함
    parsedToDos.forEach(paintToDo);
}

function sexyFilter() {
    
}

[1, 2, 3, 4].filter(sexyFilter);


/*
콘솔 : 
(값을 string으로 저장하고 싶을 때 사용)
const player = {name:"roco"}
JSON.stringify(player)

(array를 단순한 string으로 바꾸기)
JSON.parase("[1, 2, 3, 4]") // JSON.parse(localStorage.getItem("todos"))
*/