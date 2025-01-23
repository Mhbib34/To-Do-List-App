const addButton = document.getElementById("add-btn");
const listTodo = document.getElementById("todo-list");
const todoText = document.getElementById("todo-input");

function addTask() {
  const textFinal = todoText.value.trim();

  if (textFinal == "") return alert(`Cannot Be Empty`);

  const li = document.createElement("li");
  li.innerHTML = `<span>${textFinal}</span>
    <div>
        <button class="complete-btn">✔</button>
        <button class="delete-btn">✖</button>
    </div>
    `;
  listTodo.appendChild(li);
  todoText.value = "";

  const completeBtn = li.querySelector(".complete-btn");
  completeBtn.addEventListener("click", () => li.classList.toggle("completed"));

  const tombolHapus = li.querySelector(".delete-btn");
  tombolHapus.addEventListener("click", () => li.remove());
}

addButton.addEventListener("click", addTask);
todoText.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});
