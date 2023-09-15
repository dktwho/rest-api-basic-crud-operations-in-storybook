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
    },
    getTodolistTasks(todoId: string) {
        return instance.get(`todo-lists/${todoId}/tasks`)
    },
    createTodolistTasks(todoId: string, title: string) {
        return instance.post(`todo-lists/${todoId}/tasks`, {title})
    },
    deleteTodolistTask(todoId: string, taskId: string) {
        return instance.delete(`todo-lists/${todoId}/tasks/${taskId}`)
    },
    updateTodolistTask(todoId: string, taskId: string, title: string) {
        return instance.put(`todo-lists/${todoId}/tasks/${taskId}`, {title})
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