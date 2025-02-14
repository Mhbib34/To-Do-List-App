const addButton = document.getElementById("add-btn");
const listTodo = document.getElementById("todo-list");
const todoText = document.getElementById("todo-input");

function saveToLocalStorage() {
  const todos = [];
  const list = listTodo.querySelectorAll("li");

  list.forEach((item) => {
    const textTodo = item.querySelector("span").textContent;
    const completed = item.classList.contains("completed");
    todos.push({ textTodo, completed });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    const todos = JSON.parse(savedTodos);
    todos.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `<span>${item.textTodo}</span>
    <div>
    <button class="complete-btn">✔</button>
    <button class="delete-btn">✖</button>
    </div>`;

      if (item.completed) {
        li.classList.add("completed");
      }

      if (!listTodo) {
        const teksKosong = `<span>Todos Still Empty</span>`;
        listTodo.appendChild(teksKosong);
      }

      listTodo.appendChild(li);

      const completeBtn = li.querySelector(".complete-btn");
      completeBtn.addEventListener("click", () => {
        li.classList.toggle("completed");
        saveToLocalStorage();
      });

      const tombolHapus = li.querySelector(".delete-btn");
      tombolHapus.addEventListener("click", () => {
        li.remove();
        saveToLocalStorage();
      });
    });
  }
}

function addTodos() {
  const textFinal = todoText.value.trim();

  if (textFinal === "") return alert("Cannot be empty!");

  const li = document.createElement("li");

  li.innerHTML = `<span>${textFinal}</span>
  <div>
  <button class="complete-btn">✔</button>
  <button class="delete-btn">✖</button>
  </div>`;

  listTodo.appendChild(li);
  todoText.value = "";

  const completeBtn = li.querySelector(".complete-btn");
  completeBtn.addEventListener("click", () => {
    li.classList.toggle("completed");
    saveToLocalStorage();
  });

  const tombolHapus = li.querySelector(".delete-btn");
  tombolHapus.addEventListener("click", () => {
    li.remove();
    saveToLocalStorage();
  });
  saveToLocalStorage();
}

addButton.addEventListener("click", addTodos);
todoText.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTodos();
});

window.addEventListener("DOMContentLoaded", loadTodos);
