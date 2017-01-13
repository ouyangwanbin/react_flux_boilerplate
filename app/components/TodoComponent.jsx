import React from 'react';
import { Constants } from '../Constants';

require("../../assets/styles/main.css");
export default class TodoComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state={};     
  }

  render() {
    if( this.state.edit ){
        return (
          <div className="flex-item">
                <input type="text" ref="newTodo" defaultValue={this.props.todo.text} />
                    <div className="fr">
                    <button onClick={(e)=>{
                      let newTodo = Object.assign({},this.props.todo);
                      newTodo.text = this.refs.newTodo.value;
                      this.props.handleEvent( {
                          event_type:Constants.EVENT_UPDATE_TODO,
                          data:newTodo
                       });
                      this.setState({
                        edit:false
                      });
                    }}>save</button>
                    <button onClick={(e)=>{
                       this.setState({
                        edit:false
                      });
                    }}>cancel</button>
                  </div>
              </div>
        );
    }else{
        return (
          <div className="flex-item">
                <span>{this.props.todo.text}</span>
                    <div className="fr">
                    <button onClick={(e)=>{
                      this.setState({
                        edit:true
                      });
                    }}>edit</button>
                    <button onClick={(e)=>{
                       this.props.handleEvent( {
                          event_type:Constants.EVENT_REMOVE_TODO,
                          data:this.props.todo.id
                       });
                    }}>delete</button>
                  </div>
                </div>
        );
    }
  }
}
