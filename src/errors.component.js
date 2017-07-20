import React from 'react';
import { connect } from "react-redux";

class Errors extends React.Component {

	render () {
		return (
			<ul className="errors-list">
				{ 
					this.props.errors.map( (error, index) => {
					 	return <li key={index} className="error-message">{error}</li>
					})
				}
			</ul>
			
		)
	}
}

function mapStateToProps(state){
    return {
        errors: state.errors
    }
}

export default connect(mapStateToProps, null)(Errors);

