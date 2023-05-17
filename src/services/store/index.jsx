import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const currentDate = new Date().toISOString().split('T')[0];
const initialState = {
  todos: [] 
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case 'MARK_TODO_AS_REVERSE':
      return {
        ...state,
        todos: state.todos.map((todo,index) =>
          todo.id === action.payload.todoId ? { ...todo, done: action.payload.value, modified: currentDate  } : todo
        )
      };
    case 'CHANGE_NAME':
      return {
        ...state,
        todos: state.todos.map((todo,index) =>
          todo.id === action.payload.todoId ? { ...todo, name: action.payload.value, modified: currentDate  } : todo
        )
      };
    default:
      return state;

  }
};

// Configure persistence for the "ToDo" state
const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, todoReducer);

// Create the Redux store with persistence
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);