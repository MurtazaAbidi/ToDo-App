import { ADD_TODO, CHANGE_NAME, DELETE_TODO, MARK_TODO_AS_REVERSE } from "../constants";

export const addTodo = (todo) => {
    return {
      type: ADD_TODO,
      payload: todo
    };
  };
  
  export const deleteTodo = (todoId) => {
    return {
      type: DELETE_TODO,
      payload: todoId
    };
  };

  export const markTodoAsReverse = (todoId, value) => {
    return {
      type: MARK_TODO_AS_REVERSE,
      payload: {todoId:todoId,value:value}
    };
  }

  export const changeName = (todoId, value) => {
    return {
      type: CHANGE_NAME,
      payload: {todoId:todoId,value:value}
    };
  };