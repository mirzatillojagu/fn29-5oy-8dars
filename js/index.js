
const form = document.querySelector("#form");
const input = document.querySelector("#input");
const block = document.querySelector("#block");
const btn = document.querySelector("#btn");
function loadTodos() {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    savedTodos.forEach(todo => {
        createTodoItem(todo);
    });
}
function saveTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}
function createTodoItem(text) {
    const todoItem = document.createElement("div");
    todoItem.style.display = "flex";
    todoItem.style.alignItems = "center";
    todoItem.style.justifyContent = "space-between";
    todoItem.style.border = "1px solid #ddd";
    todoItem.style.borderRadius = "8px";
    todoItem.style.marginTop = "10px";
    todoItem.style.padding = "10px";
    todoItem.style.backgroundColor = "#f4f4f4";
    todoItem.style.width = "300px";
    const todoText = document.createElement("span");
    todoText.textContent = text;
    const deleteButton = document.createElement("img");
    deleteButton.src = "https://img.icons8.com/ios-glyphs/30/000000/trash.png";
    deleteButton.alt = "Trash Icon";
    deleteButton.style.marginLeft = "10px";
    deleteButton.style.cursor = "pointer";
    deleteButton.addEventListener("click", () => {
        block.removeChild(todoItem);
        let todos = JSON.parse(localStorage.getItem("todos")) || [];
        todos = todos.filter(todo => todo !== text);
        saveTodos(todos);
    });
    todoItem.appendChild(todoText);
    todoItem.appendChild(deleteButton);
    block.appendChild(todoItem);
}
btn.addEventListener("click", function(event) {
    event.preventDefault();
    const text = input.value.trim();
    if (text) {
        createTodoItem(text);
        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        todos.push(text);
        saveTodos(todos);
        input.value = ""; 
    }
});
