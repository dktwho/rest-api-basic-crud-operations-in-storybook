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
        return instance.post('todo-lists', {title: 'QUERY'})
    },
    deleteTodolist(todoId: string) {
        return instance.delete(`todo-lists/${todoId}`)
    },
    updateTodolist(todoId: string, title: string) {
        return instance.put(`todo-lists/${todoId}`, {title})
    }
}

export type TodoListType = {
    id: string,
    title: string,
    addedDate: Date,
    order: number
}