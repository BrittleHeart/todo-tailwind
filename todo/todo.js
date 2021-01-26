import {v4 as uuidv4} from 'uuid';

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

    dump(todo) {
        console.log(Object.keys(todo))
    }

    create(todo) {
        if (todo === undefined)
            throw new Error('Todo argument is required for create method!')

        if (Object.keys(todo) !== ['content', 'completed'])
            throw new Error(`{${Object.keys(todo).join('|')}} could not be assigned to {content, completed}`)

        const {
            content,
            completed
        } = todo

        if (content !== '' && typeof completed === 'boolean')
            this.todos.push({...todo, id: uuidv4()})
        else
            throw new Error(`Could not create new todo: content property supposed to have at least one character`)
    }
}