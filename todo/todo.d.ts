interface Todo {
    content: string,
    id: string,
    completed: boolean
}

export declare const todos: Todo
export declare function create(todo: Todo)