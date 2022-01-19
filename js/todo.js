const todoForm= document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const PARSETODO_KEY = "todos";

let todos = [];

function saveTodos(){
    localStorage.setItem(PARSETODO_KEY, JSON.stringify(todos));
}

function deletetodo (e){
    
    const li = e.target.parentElement;
    console.log(li.id);
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodos();
}

function paintTodo (newTodo){
    const li= document.createElement("li");
    li.id = newTodo.id;
    const span= document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText ="x"
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
    button.addEventListener("click", deletetodo);
}

function submitHandle(e){
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        id: Date.now(),
        text : newTodo
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();

}


todoForm.addEventListener("submit", submitHandle);

const saveTodo = localStorage.getItem(PARSETODO_KEY);

if (saveTodo !== null){
    //console.log(saveTodo);

    const parseTodos = JSON.parse(saveTodo);
    //console.log(parseTodos);
    todos = parseTodos;
    parseTodos.forEach(paintTodo);
}

