import * as Constants from "./constants";

export function addTodo(label){
	return (dispatch, getState) => {
		if (!label) {
			let errors = getState().errors;
			dispatch({ type: Constants.ERROR_EMPTY, message: 'Todo cannot be empty' });
			return;
		}

		dispatch({ type: Constants.ADD_TODO, label });
	}
}

export function sendError(message) {
	return { type: Constants.ERROR_EMPTY, message };
}

export function clearErrors () {
	return { type: Constants.CLEAR_ERROR };	
}

export function removeTodo(id){
    return { type: Constants.REMOVE_TODO, id }
}

export function setTodoCompleted(id, isCompleted){
    return { type: Constants.SET_TODO_COMPLETED, id, isCompleted }
}

export function setAllTodoCompleted(isCompleted){
    return { type: Constants.SET_ALL_TODO_COMPLETED, isCompleted }
}

export function updateTodoLabel(id, label) {
	return (dispatch, getState) => {
		if (!label) {
			return;
		}
			
		dispatch({ type: Constants.UPDATE_TODO_LABEL, id, label });
	}	
    //return { type: Constants.UPDATE_TODO_LABEL, id, label }
}

export function clearCompleted(){
    return { type: Constants.CLEAR_COMPLETED }
}

export function showAll () {
	return { type: Constants.SHOW_ALL }
}

export function showActive () {
	return { type: Constants.SHOW_ACTIVE }
}

export function showCompleted () {
	return { type: Constants.SHOW_COMPLETED }
}