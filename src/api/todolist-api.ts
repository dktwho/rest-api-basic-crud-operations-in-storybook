import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true
})

export const todolistApi = {
    getTodoList() {
        return instance.get<TodoListType[]>('todo-lists')
    },
    createTodoList() {
        return instance.post<CreateTodolistResponseType>('todo-lists', {title: 'QUERY'})
    },
    deleteTodolist(todoId: string) {
        return instance.delete<DeleteTodolistResponseType>(`todo-lists/${todoId}`)
    },
    updateTodolist(todoId: string, title: string) {
        return instance.put<UpdateTodolistResponseType>(`todo-lists/${todoId}`, {title})
    }
}

export type TodoListType = {
    id: string,
    title: string,
    addedDate: Date,
    order: number
}

type CreateTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: {
        item: TodoListType
    }
}


type UpdateTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: {}
}


type DeleteTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: {}
}
