import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';
import './styles.css'

export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);

// const newTodo = new Todo('Aprender JavaScript');
// todoList.nuevoTodo(newTodo);
// console.log(todoList.todos);