import { EventEmitter } from 'events';
import AppDispatcher from './AppDispatcher';
import { Constants } from './Constants';


let _store={};

class AppStoreClass extends EventEmitter {

    addChangeListener(cb) {
        this.on(Constants.EVENT_DATA_CHANGE, cb);
    }

    removeChangeListener(cb) {
        this.removeListener(Constants.EVENT_DATA_CHANGE, cb);
    }

    emitChange( data ) {
        this.emit(Constants.EVENT_DATA_CHANGE, data);
    }

    getStore( ){
        return _store;
    }
}

let AppStore = new AppStoreClass();
AppDispatcher.register((payload) => {
    switch (payload.actionType) {
        case Constants.ACTION_ADD_TODO:
            let todo = payload.action;
            todo.id = Date.now();
            if( !_store.todos ){
                _store.todos = [];
            }else{
                _store.todos = _store.todos.slice(0);
            }
            _store.todos.push( todo );
            AppStore.emitChange( );
            break;
        case Constants.ACTION_GET_TODO:
            if( _store.todos ){
                _store.todos = _store.todos.slice(0);
                _store.todos.map((item,index,store)=>{
                    if( item.id === payload.action ){
                        let newTodo = Object.assign({},item);
                        newTodo.selected = true;
                        store[index] = newTodo;
                    } 
                });
            }
            AppStore.emitChange( );
            break;
        case Constants.ACTION_GET_ALL_TODOS:
            AppStore.emitChange( );
        break;
        case Constants.ACTION_REMOVE_TODO:
            if( _store.todos ){
                _store.todos = _store.todos.slice(0);
                _store.todos.map((item,index,store)=>{
                    if( item.id === payload.action ){
                        store.splice(index,1);
                    } 
                });
            }
            AppStore.emitChange( );
            break;
        case Constants.ACTION_UPDATE_TODO:
            let updatedTodo = payload.action;
            if( _store.todos ){
                _store.todos = _store.todos.slice(0);
                _store.todos.map((item,index,store)=>{
                    if( item.id === updatedTodo.id ){
                        store[index] = updatedTodo;
                    } 
                });
            }
            AppStore.emitChange( );
            break;
    }
});


export default AppStore;
