import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Todo extends React.Component {

    constructor() {

    }

    componentDidMount() {
        toast.success("");
    }

    componentWillUnmount() {
        toast.error("");
    }

    render() {
        const { Text, Remove } = this.props
        return (
            <div>
                <input>{Text}</input>
                <button onClick={Remove()}>--</button>
            </div>
        );
    }

}

export default Todo
