import React from "react";
import {render} from "react-dom";
import {Header} from "./components/Header";
import {Home} from "./components/Home";

class App extends React.Component {
    render() {
        const hobbies = ["being", "better", "than", "tristan"];
        return (
            <div className="container">
                <Header/>
                <div className="col-xs-10 col-xs-offset-1">
                    <Home name={"Mike"} hobbies={hobbies}/>
                </div>
                <div className="col-xs-10 col-xs-offset-1">
                    <Home/>
                </div>
                <div className="col-xs-10 col-xs-offset-1">
                    <Home/>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));
