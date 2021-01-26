import { v4 as uuidv4 } from 'uuid';

export class Todo {
    todos = [
        {
            content: '',
            id: uuidv4(),
            completed: false
        }
    ]

    constructor() {
        if (this.todos.length === 0)
            console.log('Nothing to show')
        console.log(this.todos)
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