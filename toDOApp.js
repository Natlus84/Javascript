document.addEventListener('DOMContentLoaded', () => {
  const todoInput = document.getElementById('todo-input');
  const addTodoButton = document.getElementById('add-todo-button');
  const todoList = document.getElementById('todo-list');

  // Function to create a new todo item element
  function createTodoItem(text) {
    const li = document.createElement('li');
    li.className = 'todo-item';
    
    const span = document.createElement('span');
    span.textContent = text;
    li.appendChild(span);
    
    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'todo-buttons';
    
    // Create and append the "Complete" button
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.className = 'complete-button';
    completeButton.addEventListener('click', () => {
      li.classList.toggle('complete');
    });
    buttonsDiv.appendChild(completeButton);
    
    // Create and append the "Delete" button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      li.remove();
    });
    buttonsDiv.appendChild(deleteButton);
    
    li.appendChild(buttonsDiv);
    return li;
  }

  // Add todo item to the list
  function addTodo() {
    const text = todoInput.value.trim();
    if (text) {
      const todoItem = createTodoItem(text);
      todoList.appendChild(todoItem);
      todoInput.value = ''; // Clear the input field
    }
  }

  // Event listener for the "Add" button
  addTodoButton.addEventListener('click', addTodo);

  // Event listener for the "Enter" key press in the input field
  todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  });
});
