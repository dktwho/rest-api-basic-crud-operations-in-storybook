import React, {useEffect, useState} from 'react'
import {todolistApi} from "../api/todolist-api";

export default {
    title: 'API'
}
export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.getTodoList()
            .then((res) => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.createTodoList()
            .then((res) => setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = '5543e7e2-20a3-4dbc-96b1-b2ad9a0a0f09'
        todolistApi.deleteTodolist(todoId)
            .then((res) => setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = '916408aa-f8a3-49b3-b9ae-b21b615c1b1e'
        const title = 'ANGULAR------'
        todolistApi.updateTodolist(todoId, title)
            .then((res) => setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const GetTodolistTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = '34a01fab-3f84-4f08-89fa-a460c9240377'
        todolistApi.getTodolistTasks(todoId)
            .then((res) => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolistTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = '34a01fab-3f84-4f08-89fa-a460c9240377'
        const title = 'new created task for todolist with title query'
        todolistApi.createTodolistTasks(todoId, title)
            .then((res) => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolistTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = '34a01fab-3f84-4f08-89fa-a460c9240377'
        const taskId = 'f91d76e3-eaf1-48c9-b3d5-de8e42da566c'
        todolistApi.deleteTodolistTask(todoId, taskId)
            .then((res) => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTodolistTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = '34a01fab-3f84-4f08-89fa-a460c9240377'
        const taskId = 'd9e68b0a-7543-4da1-b36c-2fe4997f657a'
        const title = 'This is new title for task'
        todolistApi.updateTodolistTask(todoId, taskId, title )
            .then((res) => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}