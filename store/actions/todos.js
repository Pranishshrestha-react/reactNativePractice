import axios from 'axios';
//Action types
export const ADD_TODOS = 'ADD_TODOS';
export const GET_TODOS = 'GET_TODOS';
export const CHANGE_PRIORITY = 'CHANGE_PRIORITY';
export const MARK_AS_COMPLETE = 'MARK_AS_COMPLETE';
const BASE_URL ="https://todolist-4a8e2-default-rtdb.firebaseio.com"

//Action generators

const addTodos =(todo) => ({
    type: ADD_TODOS,
    payload: todo
})
export const getTodos =(todos) => ({ 
    type: GET_TODOS,
    payload: todos
})
export const changePriority = (todoid) => ({
    type: CHANGE_PRIORITY,
    payload: todoid
})
const markAsComplete = (todoId) => ({
    type: MARK_AS_COMPLETE,
    payload: todoId
}) 

export const markTodoAsComplete = (todoId) => async dispatch =>{
    const response = await axios.patch(`${BASE_URL}/todo/${todoId}.json`, {isComplete: true});
    dispatch(markAsComplete(todoId))
}
export const addTodosToFirebase = todo => async dispatch => {
    const response = await axios.post(`${BASE_URL}/todo.json`, todo);
    todo.id = response.data.name;
    dispatch(addTodos(todo))
    }
//upper and lower are same function but written longer and shorter
export const getAllTodos = () => {
    return async (dispatch) => {
      const response = await axios.get(`${BASE_URL}/todo.json`);
      const allTodoIds = Object.keys(response.data)
      const todos = allTodoIds.map(id => {
        const todo = response.data[id];
        todo['id'] = id
        return todo
      })
      
      dispatch(getTodos(todos))
    }
  }