import React from "react";
import TodoList from "./todoList.component";
import AddTodo from "./addTodo.component";
import Navigation from "./navigation.component";
import Errors from './errors.component';
import { Route } from "react-router";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class App extends React.Component {
    render(){
        return (
        	<ReactCSSTransitionGroup
        		transitionName="todoapp"
        		transitionEnter={false}
        		transitionLeave={false}
        		transitionAppear={true}
        		transitionAppearTimeout={500}>
            	<div className="todoapp">
                	<AddTodo />
                	<Route path="/:filter" component={TodoList} />
                	<Navigation />
                	<Errors />
            	</div>
            </ReactCSSTransitionGroup>
           )
    }
}
