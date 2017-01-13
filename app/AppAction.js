import AppDispatcher from './AppDispatcher';
import { Constants } from './Constants';

class AppActionClass {
    addTodo(data) {
        AppDispatcher.dispatch({
            actionType: Constants.ACTION_ADD_TODO,
            action: data 
        });
    }
    getTodo( id ){
        AppDispatcher.dispatch({
            actionType: Constants.ACTION_GET_TODO,
            action: id 
        });
    }
    getAllTodos( ){
        AppDispatcher.dispatch({
            actionType: Constants.ACTION_GET_ALL_TODOS
        });
    }
    removeTodo( id ){
        AppDispatcher.dispatch({
            actionType: Constants.ACTION_REMOVE_TODO,
            action: id 
        });
    }
    updateTodo( data ){
        AppDispatcher.dispatch({
            actionType: Constants.ACTION_UPDATE_TODO,
            action: data 
        });
    }
}

let AppAction = new AppActionClass();

export default AppAction;
