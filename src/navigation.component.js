import React from "react";
import { connect } from "react-redux";
import { clearCompleted, showActive, showAll } from "./actions";
import { NavLink, withRouter } from 'react-router-dom';

class Navigation extends React.Component {

    render() {
        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{ this.props.totalActive }</strong>
                    <span> </span>
                    <span>items</span>
                    <span> left</span>
                </span>
                <ul className="filters">
                    <li><NavLink to="/all" activeClassName="selected">All</NavLink></li>
                    <span> </span>
                    <li><NavLink to="/active" activeClassName="selected">Active</NavLink></li>
                    <span> </span>
                    <li><NavLink to="/completed" activeClassName="selected">Completed</NavLink></li>
                </ul>
                <button onClick={ ()=> this.props.clearCompleted() } className="clear-completed">Clear completed</button>
            </footer>
        )
    }
}

function mapStateToProps(state){
    return {
        totalActive: state.totalActive
    }
}

function mapDispatchToProps(dispatch){
    return {
        clearCompleted: () => dispatch( clearCompleted() ),
        showActive: () => dispatch( showActive() ),
        showAll: () => dispatch( showAll() )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));
