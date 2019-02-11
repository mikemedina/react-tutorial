import React from "react";

export class Home extends React.Component {
    render() {
        return (
            <div>
                <p>My name is {this.props.name}</p>
                <ul>
                    {this.props.hobbies.map((hobby) => <li>{hobby}</li>)}
                </ul>
            </div>
        );
    }
}
