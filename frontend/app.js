const API = "/api/todos";

async function fetchTodos() {
  const res = await fetch(API);
  const todos = await res.json();

  const list = document.getElementById("todoList");
  list.innerHTML = "";

  todos.forEach(todo => {
    const li = document.createElement("li");
    li.textContent = todo.text;

    const btn = document.createElement("button");
    btn.textContent = "❌";
    btn.onclick = () => deleteTodo(todo._id);

    li.appendChild(btn);
    list.appendChild(li);
  });
}

async function addTodo() {
  const input = document.getElementById("todoInput");
  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: input.value })
  });
  input.value = "";
  fetchTodos();
}

async function deleteTodo(id) {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  fetchTodos();
}

fetchTodos();
