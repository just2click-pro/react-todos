import { combineReducers } from "redux";
import todosReducer from "./todosReducer";
import totalActiveReducer from "./totalActiveReducer";
import errorsReducers from './errorsReducers';

export default combineReducers({
    todos: todosReducer,
    totalActive: totalActiveReducer,
    errors: errorsReducers
})
