import React from "react";
import Todo from Todo.js
import { toast, ToastContainer } from "react-toastify";

import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./App.css";
class App extends React.Component {

    constructor() {
        this.state = {
            todos: [],
            input: ""
        }
    }

    componentDidUpdate(previousProps, previousState) {
        const { todos } = this.state;
        if (todos.length !== previousState.todos.length) {
            toast(`Remaining todos: ${todos.length}`);
        }
    }

    removeToDos = (id) => {
        const { todos } = this.state;
        let newTodos = todos.filter((todo) => {
            todo.id != id
        })

        this.setState({
            todos: newTodos
        })

    }

    addToDos = (e) => {
        e.preventDefault();
        const { todos, input } = this.state;
        const todo = { id: todos.length, text: input }
        this.setState({
            todos: [...todos, todo]
        })
    }

    mapTodoComponent = () => {
        const { todos } = this.state
        return todos.map((todo) => {
            return <Todo Text={todo.Text}
                Remove={this.removeToDos(todo.id)}
            />
        })
    }

    handeInput = (e) => {
        this.setState({ input: e.target.value })
    }

    render() {
        return (<>
            <form onSubmit={this.addToDos}>
                <input onChange={this.handeInput} ></input>
            </form>
            <div>
                {this.mapTodoComponent()}
            </div>
        </>);
    }

}

export default App;
