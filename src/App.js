import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Navigation} from './main/containers/Navigation';
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./main/components/create-todo.component";
import EditTodo from "./main/components/edit-todo.component";
import TodosList from "./main/components/todos-list.component";

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <main className="main-content col-lg-12 col-md-12 col-sm-12 p-0">
			<Router>
                        <Navigation/>
                        <div class="main-content-container container-fluid px-4">
                            <Route  path="/plantInfo" component={CreateTodo}  />
                        </div>
			</Router>
                    </main>
                </div>
            </div>
        );
    }
}
export default App;
