import React from "react";
import { connect } from "react-redux";
import Todo from "./todo.component";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class TodoList extends React.Component {
    render() {
        let filter = this.props.match.params.filter, todos;
        if (filter == 'all') {
            todos = this.props.todos;
        } else if (filter == 'active') {
            todos = this.props.todos.filter( todo => !todo.isCompleted );
        } else if (filter == 'completed') {
            todos = this.props.todos.filter( todo => todo.isCompleted );
        }

        return (
            <ul className="todo-list">
                <ReactCSSTransitionGroup
                    transitionName="todo"
                    animationEnterTimeout={500}
                    animationLeaveTimeout={500}>
                        { todos.map(model => <li className="todo" key={model.id}><Todo {...model}/></li>) }
                    </ReactCSSTransitionGroup>
            </ul>
        )
    }
}

function mapStateToProps(state){
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, null)(TodoList);
