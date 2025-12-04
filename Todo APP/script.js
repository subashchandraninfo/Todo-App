function addTask() {
  let input = document.getElementById("taskInput");
  let list = document.getElementById("taskList");

  if (!input.value.trim()) return;

  let li = document.createElement("li");
  li.innerHTML = `${input.value} 
    <button onclick="this.parentElement.remove()">Delete</button>`;

  list.appendChild(li);
  input.value = "";
}
