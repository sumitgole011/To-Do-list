// Selectors

const toDoInput = document.querySelector('.todo-input');
const toDoBtn = document.querySelector('.todo-btn');
const toDoList = document.querySelector('.todo-list');
const standardTheme = document.querySelector('.standard-theme');
const lightTheme = document.querySelector('.light-theme');
const darkerTheme = document.querySelector('.darker-theme');


// Event Listeners

toDoBtn.addEventListener('click', addToDo);
toDoList.addEventListener('click', deletecheck);
document.addEventListener("DOMContentLoaded", getTodos);
standardTheme.addEventListener('click', () => changeTheme('standard'));
lightTheme.addEventListener('click', () => changeTheme('light'));
darkerTheme.addEventListener('click', () => changeTheme('darker'));

// Check if one theme has been set previously and apply it (or std theme if not found):
let savedTheme = localStorage.getItem('savedTheme');
savedTheme === null
    ? changeTheme('standard')
    : changeTheme(savedTheme);


// Functions;

function createTodoId() {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        return crypto.randomUUID();
    }

    return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

// Read both the current object format and legacy string entries. This keeps
// tasks created before completion tracking was introduced.
function getStoredTodos() {
    let storedTodos;

    try {
        storedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    } catch (error) {
        storedTodos = [];
    }

    if (!Array.isArray(storedTodos)) {
        storedTodos = [];
    }

    const todos = storedTodos
        .map(todo => {
            if (typeof todo === 'string') {
                return {
                    id: createTodoId(),
                    text: todo,
                    completed: false
                };
            }

            if (!todo || typeof todo.text !== 'string') {
                return null;
            }

            return {
                id: typeof todo.id === 'string' && todo.id ? todo.id : createTodoId(),
                text: todo.text,
                completed: todo.completed === true
            };
        })
        .filter(Boolean);

    // Persist normalized records, including migrated legacy string entries.
    localStorage.setItem('todos', JSON.stringify(todos));
    return todos;
}

function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function addToDo(event) {
    // Prevents form from submitting / Prevents form from reloading.
    event.preventDefault();

    const text = toDoInput.value.trim();

    if (!text) {
        alert("You must write something!");
        return;
    }

    const todo = {
        id: createTodoId(),
        text,
        completed: false
    };

    const todos = getStoredTodos();
    todos.push(todo);
    saveTodos(todos);
    renderTodo(todo);

    // Clear the input.
    toDoInput.value = '';
}

function renderTodo(todo) {
    // ToDo DIV.
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add('todo', `${savedTheme}-todo`);
    toDoDiv.dataset.id = todo.id;

    if (todo.completed) {
        toDoDiv.classList.add('completed');
    }

    // Create LI.
    const newToDo = document.createElement('li');
    newToDo.textContent = todo.text;
    newToDo.classList.add('todo-item');
    toDoDiv.appendChild(newToDo);

    // Check button.
    const checked = document.createElement('button');
    checked.innerHTML = '<i class="fas fa-check"></i>';
    checked.setAttribute(
        'aria-label',
        todo.completed ? 'Mark task as incomplete' : 'Mark task as completed'
    );
    checked.classList.add('check-btn', `${savedTheme}-button`);
    toDoDiv.appendChild(checked);

    // Delete button.
    const deleted = document.createElement('button');
    deleted.innerHTML = '<i class="fas fa-trash"></i>';
    deleted.setAttribute('aria-label', 'Delete task');
    deleted.classList.add('delete-btn', `${savedTheme}-button`);
    toDoDiv.appendChild(deleted);

    // Append to list.
    toDoList.appendChild(toDoDiv);
}

function deletecheck(event) {
    // Clicks on an icon should trigger its containing action button too.
    const item = event.target.closest('button');
    if (!item || !toDoList.contains(item)) return;

    const todoDiv = item.parentElement;
    const todoId = todoDiv.dataset.id;

    // Delete.
    if (item.classList.contains('delete-btn')) {
        removeLocalTodo(todoId);

        // Animate removal without relying on item.parentElement after the event.
        todoDiv.classList.add("fall");
        todoDiv.addEventListener('transitionend', () => {
            todoDiv.remove();
        }, { once: true });
    }

    // Check / uncheck.
    if (item.classList.contains('check-btn')) {
        const todos = getStoredTodos();
        const todo = todos.find(savedTodo => savedTodo.id === todoId);

        if (!todo) return;

        todo.completed = !todo.completed;
        saveTodos(todos);

        todoDiv.classList.toggle('completed', todo.completed);
        item.setAttribute(
            'aria-label',
            todo.completed ? 'Mark task as incomplete' : 'Mark task as completed'
        );
    }
}

function getTodos() {
    getStoredTodos().forEach(renderTodo);
}

function removeLocalTodo(todoId) {
    const todos = getStoredTodos();
    saveTodos(todos.filter(todo => todo.id !== todoId));
}


// Change theme function:
function changeTheme(color) {
    localStorage.setItem('savedTheme', color);
    savedTheme = localStorage.getItem('savedTheme');

    document.body.className = color;

    // Change blinking cursor for darker theme:
    color === 'darker'
        ? document.getElementById('title').classList.add('darker-title')
        : document.getElementById('title').classList.remove('darker-title');

    document.querySelector('input').className = `${color}-input`;

    // Change todo color without changing its completion status:
    document.querySelectorAll('.todo').forEach(todo => {
        todo.className = todo.classList.contains('completed')
            ? `todo ${color}-todo completed`
            : `todo ${color}-todo`;
    });

    // Change buttons color according to their type (todo, check or delete):
    document.querySelectorAll('button').forEach(button => {
        if (button.classList.contains('check-btn') || button.classList.contains('delete-btn')) {
            button.className = `${button.classList.contains('check-btn') ? 'check-btn' : 'delete-btn'} ${color}-button`;
        } else if (button.classList.contains('todo-btn')) {
            button.className = `todo-btn ${color}-button`;
        }
    });
}
