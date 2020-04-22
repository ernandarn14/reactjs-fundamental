import React from "react";
import { connect } from "react-redux";
import { todoInputHandler, userInputHandler, addItem, loginHandler } from "../../redux/actions";
// import { userInputHandler } from "../../redux/actions/user"

class ToDoReduxScreen extends React.Component {
    addInput = () => {

    }
    render() {
        return (
            <div className="container">
                <h1>To Do</h1>
                {/* <h1>{this.props.todo.todoInput}</h1> */}
                {/* <input
                    type="text"
                    className="form-control"
                    placeholder="To Do Input"
                    onChange={(e) => this.props.onChangeToDo(e.target.value)}
                /><br /> */}
                {/* <h1>{this.props.user.username}</h1>
          <input
          type="text"
          className="form-control"
          placeholder="Username Input"
          onChange={(e) => this.props.onChangeUser(e.target.value)}
        /> */}
                {/* <input type="button" value="Submit" className="btn btn-primary" onClick={() => this.props.onAddToDo(this.props.todo.todoInput)} />
                {this.props.todo.todoList.map((val) => {
                  return  <p>{val}</p>
                })} */}
                <p>Testing 1: {this.props.user.testing}</p>
                <p>Testing 2: {this.props.user.testing2}</p>
                <input type="button" value="Testing" className="btn btn-success" onClick={this.props.onLogin} />
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
    onAddToDo: addItem,
    onLogin: loginHandler
};

export default connect(stateMapToProps, mapDispatchToProps)(ToDoReduxScreen);
