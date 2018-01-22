import React, {Component, PropTypes} from 'react';
import Web from './Web.jsx';

export default class Webs extends Component {
	constructor() {
	    super();
	    this.state = {data: []};
	}

	shouldComponentUpdate() {
		this.state = {data: this.props.data};
        return true;
	}

    componentDidMount() {
        this.state = {data: this.props.data};
	}
	
	getWebs() {
		if (this.props.data != null) {
			return this.props.data;
		}
        return [];
	}
	
    render() {
		return (
	        <ul className="list-group">
		    {
				this.props.data.map(web =>
			    <Web data={web} key={web.ID} keyword={this.props.keyword} parent={this}/>
			)}
		    </ul>
		);
	}

	deleteWeb(ID) {
        this.props.parent.deleteWeb(ID);
	}
}