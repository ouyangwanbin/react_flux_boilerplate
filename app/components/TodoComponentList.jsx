import React from 'react';
import { Constants } from '../Constants';
import { AppAction } from '../AppAction';
import AppStore from '../AppStore';
import TodoComponent from './TodoComponent';

require("../../assets/styles/main.css");
export default class TodoComponentList extends React.PureComponent { 
  render() {
  	if( !this.props.todos ){
  		return null;
  	}
    return (
      <div className="flex-container">
      	 {
      	 	this.props.todos.map((item, index)=>{
      	 		return <TodoComponent todo={item} key={item.id} handleEvent={this.props.handleEvent}/>
      	 	})
      	 }
      </div>
    );
  }
}
