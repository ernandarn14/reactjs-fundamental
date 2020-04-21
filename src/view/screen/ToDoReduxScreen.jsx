import React from "react";
import { connect } from "react-redux";
import { todoInputHandler, userInputHandler, addItem } from "../../redux/actions";
// import { userInputHandler } from "../../redux/actions/user"

class ToDoReduxScreen extends React.Component {
    addInput = () => {

    }
    render() {
        return (
            <div className="container">
                <h1>To Do</h1>
                {/* <h1>{this.props.todo.todoInput}</h1> */}
                <input
                    type="text"
                    className="form-control"
                    placeholder="To Do Input"
                    onChange={(e) => this.props.onChangeToDo(e.target.value)}
                /><br />
                {/* <h1>{this.props.user.username}</h1>
          <input
          type="text"
          className="form-control"
          placeholder="Username Input"
          onChange={(e) => this.props.onChangeUser(e.target.value)}
        /> */}
                <input type="button" value="Submit" className="btn btn-primary" onClick={() => this.props.onAddToDo(this.props.todo.todoInput)} />
                {this.props.todo.todoList.map((val) => {
                  return  <p>{val}</p>
                })}
            </div>
        );
    }
}

const stateMapToProps = (state) => {
    return {
        todo: state.todo,
        user: state.user,
        todoList: state.todoList
    };
};

const mapDispatchToProps = {
    onChangeToDo: todoInputHandler,
    onChangeUser: userInputHandler,
    onAddToDo: addItem
};

export default connect(stateMapToProps, mapDispatchToProps)(ToDoReduxScreen);
