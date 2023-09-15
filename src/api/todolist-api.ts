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
        return instance.post<ResponseType<{ item: TodoListType }>>('todo-lists', {title: 'QUERY'})
    },
    deleteTodolist(todoId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todoId}`)
    },
    updateTodolist(todoId: string, title: string) {
        return instance.put<ResponseType>(`todo-lists/${todoId}`, {title})
    }
}

export type TodoListType = {
    id: string,
    title: string,
    addedDate: Date,
    order: number
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}