import { v4 as uuidv4 } from 'uuid';

export class Todo {
    todos = [
        {
            content: '',
            id: 0,
            completed: false
        }
    ]

    constructor() {
        this.todos.id = uuidv4()
    }

    index() {
        return this.todos
    }

    create(todo) {
        const { content, completed } = todo

        if (content !== '' && typeof completed === 'boolean')
            this.todos.push(todo)
    }

}