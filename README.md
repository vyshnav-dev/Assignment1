# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Project Title: Todo List Application
This project is a simple To-Do List application that interacts with the JSONPlaceholder API to manage tasks.

Running the Application
Installation

Clone the repository: git clone https://github.com/your-username/todo-list.git
Navigate to the project directory: cd todo-list
Install dependencies: npm install or yarn install
Starting the Application

Start the development server: npm run dev
Access the application via a web browser at http://localhost:5173
Interacting with the To-Do List
Explain how users can interact with your To-Do List application, including functionalities such as:

Adding a new task
Marking a task as complete
Updating a task
Deleting a task

Interacting with the To-Do List
Using JSONPlaceholder API
This To-Do List application uses the JSONPlaceholder API (https://jsonplaceholder.typicode.com) as its data source. Below are the API endpoints and their purposes:

GET Request - Fetch Tasks

Endpoint: https://jsonplaceholder.typicode.com/todos
Purpose: Retrieve a list of tasks.
POST Request - Add Task

Endpoint: https://jsonplaceholder.typicode.com/todos
Purpose: Add a new task to the list.
Sample Request Body:
json
Copy code
{
  "userId": 1,
  "title": "Task Title",
  "completed": false
}
PUT Request - Update Task

Endpoint: https://jsonplaceholder.typicode.com/todos/:id
Purpose: Update an existing task by ID.
Sample Request Body:
json
Copy code
{
  "title": "Updated Task Title",
  "completed": true
}
DELETE Request - Remove Task

Endpoint: https://jsonplaceholder.typicode.com/todos/:id
Purpose: Delete a task by its ID.