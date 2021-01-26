import { Todo } from '../todo/todo';

const newTodo = new Todo();

newTodo.content = "First Todo"
newTodo.id = 1
newTodo.completed = false

console.log(newTodo);