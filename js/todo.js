const todoForm = document.getElementById("todo-form");
const todoList = document.getElementById("todo-list");
const todoInput = todoForm.querySelector("#todo-form input");

let todos = [];
const TODOS_KEY = "todos";
function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodo();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo.text;
  todoList.appendChild(li);

  checkbox.addEventListener("change", (event) => {
    if (event.currentTarget.checked) {
      span.style.textDecoration = "line-through";
    } else {
      span.style.textDecoration = "none";
    }
  });
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoForm.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodo();
  todoInput.value = "";
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodo = localStorage.getItem(TODOS_KEY);

if (savedTodo != null) {
  const parsedTodo = JSON.parse(savedTodo);
  todos = parsedTodo;
  parsedTodo.forEach(paintTodo);
}
