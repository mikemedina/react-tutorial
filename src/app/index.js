import React from "react";
import {render} from "react-dom";
import {Home} from "./components/Home";
import {About} from "./components/About";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";


const App = () => {
    return (
        <div>
            <Router>
                <div>
                    <Link to={"home"}>Home</Link>
                    <Link to={"about"}>About</Link>
                    <Route path="home" component={Home}/>
                    <Route path="about" component={About}/>
                </div>
            </Router>
        </div>
    );
};

render(<App/>, window.document.getElementById("app"));
