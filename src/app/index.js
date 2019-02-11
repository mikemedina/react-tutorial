import React from "react";
import {render} from "react-dom";
import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {Ager} from "./components/Ager";

class App extends React.Component {
    render() {
        const hobbies = ["programming", "learning", "doing"];
        return (
            <div className="container">
                <Header/>
                <div className="col-xs-10 col-xs-offset-1">
                    <Home name={"Mike"} hobbies={hobbies}/>
                </div>
                <div className="col-xs-10 col-xs-offset-1">
                    <Ager age={12}/>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));
