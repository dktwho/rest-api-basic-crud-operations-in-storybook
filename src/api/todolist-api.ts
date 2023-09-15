import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true
})

export const todolistApi = {
    getTodoList() {
        return instance.get('todo-lists')
    },
    createTodoList() {
        return instance.post('todo-lists', {title: 'VUE'})
    },
    deleteTodolist(todoId: string) {
        return instance.delete(`todo-lists/${todoId}`)
    },
    updateTodolist(todoId: string, title: string) {
        return instance.put(`todo-lists/${todoId}`, {title})
    }
}