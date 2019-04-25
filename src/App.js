import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Navigation} from './main/containers/Navigation';
import "bootstrap/dist/css/bootstrap.min.css";

import {
	Container,
	Row,
	Col
} from 'reactstrap';

import CreateTodo from "./main/components/create-todo.component";
import EditTodo from "./main/components/edit-todo.component";
import TodosList from "./main/components/todos-list.component";

class App extends Component {
    render() {
        return (
			
		<Router>
			<Container fluid="true">
                <Row>
					<Col>
						<Navigation />
					</Col>
				</Row>
			<Row>
				<Col>	
					<Route  path="/plantInfo" component={CreateTodo}  />
				</Col>
			</Row>
			</Container>
			
		</Router>
        );
    }
}
export default App;
