import React from "react";

export class Ager extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.age
        }
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 1
        });
    }

    render() {
        return (
            <div>
                <p>My age is {this.state.age}</p>
                <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Increment</button>
            </div>
        );
    }
}
