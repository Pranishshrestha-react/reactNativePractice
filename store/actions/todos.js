//Action types
export const ADD_TODOS = 'ADD_TODOS';
export const CHANGE_PRIORITY = 'CHANGE_PRIORITY';
export const MARK_AS_COMPLETE = 'MARK_AS_COMPLETE';

//Action generators

export const addTodos =(todo) => ({
    type: ADD_TODOS,
    payload: todo
})
export const changePriority = (todoid) => ({
    type: CHANGE_PRIORITY,
    payload: todoid
})
export const markAsComplete = (todoid) => ({
    type: MARK_AS_COMPLETE,
    payload: todoid
})