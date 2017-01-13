import React from 'react';
import { render } from 'react-dom';
import { Constants } from './Constants';
import AppAction  from './AppAction';
import AppStore from './AppStore';
import TodoComponentList from './components/TodoComponentList';

require("../assets/styles/main.css");
export default class App extends React.PureComponent { 

  constructor(props) {
    super(props);
    this.state={};
    this.dataChange = this.dataChange.bind(this);
    this.handleEvent = this.handleEvent.bind(this);        
  }

  componentDidMount() {
    AppStore.addChangeListener(this.dataChange);
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this.dataChange);
  }

  dataChange( data ){
  	 let todos = AppStore.getStore().todos;
  	 if( todos ){
  	 	this.setState({
     		todos:todos
     	})
  	 }
  }

  handleAddTodo( todo ){
  	AppAction.addTodo( todo ); 	
  }

  handleRemoveTodo( id ){
  	AppAction.removeTodo( id ); 
  }

  handleUpdateTodo( todo ){
  	AppAction.updateTodo( todo );
  }

  handleEvent( data ){
  	 let event = data.event_type;
  	 let val = data.data;
  	 switch( event ){
  	 	case Constants.EVENT_ADD_TODO:
  	 	   this.handleAddTodo( val );
  	 	   break;
  	 	case Constants.EVENT_REMOVE_TODO:
  	 	   this.handleRemoveTodo( val );

  	 	case Constants.EVENT_UPDATE_TODO:
  	 	   this.handleUpdateTodo( val );
  	 	default:
  	 	   break;
  	 } 
  }

  render() {
    return (
      <div>
          <div className="main">
		      Todo: <input type="text" ref="todo" />
		      <button onClick={(e)=>{
		      	 let todo = {
		      	 	id:Date.now(),
		      	 	text:this.refs.todo.value
		      	 }
		      	 this.handleEvent({
		      	 	event_type:Constants.EVENT_ADD_TODO,
		      	 	data:todo
		      	 });
		      }}>create</button>
		  </div>
		  <TodoComponentList todos={this.state.todos} handleEvent={this.handleEvent} />
      </div>
    )
  }
}


render( <App /> , document.getElementById( "app" ) );