import React, {Component, PropTypes} from 'react';
import Web from './Web.jsx';

export default class Webs extends Component {
	constructor() {
	    super();
	}
	
	getWebs() {
		if (this.props.data != null) {
			return this.props.data;
		}
        return [];
	}
	
    render() {
		debugger;
		
		
		
		
		return (
	        <ul className="list-group">
		    {
				this.props.data.map(web =>
			    <Web data={web} key={web.ID} keyword={this.props.keyword} />
			)}
		    </ul>
		);
	}
}