import React, { Component, PropTypes } from 'react';

function Content(props) {
	return <p>Content组件的props.value:  {props.value}</p>;
}

Content.propType = {
	value: PropTypes.number.isRequired
};

export default class Counter extends Component {
	constructor() {
	    super();
        this.state = {value: 0};		
	}
	
	render() {
		return (
		    <div>
			    <button onClick={() => this.setState({value: null})}>
				 Increment
				</button>
				<pre>
				    {JSON.stringify(this.state, null, 2)}
					<Content value = {this.state.value} />
				</pre>
			</div>
		);
	}
}