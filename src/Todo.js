import React from "react";
import { toast } from "react-toastify";
class Todo extends React.Component {

    

    componentDidMount() {
        debugger
        const { text } = this.props;
       toast.success(`New todo added: ${text}`);
    }

    componentWillUnmount() {
        const { text } = this.props;
        toast.error(`Todo deleted: ${text}`);    }

    render() {
        const { text, Remove } = this.props
        return (
            <div>
                <p>
                {text}
                <button onClick={()=>Remove()}>--</button>
                </p>
            </div>
        );
    }

}

export default Todo
