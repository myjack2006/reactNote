import React, {Component, PropTypes} from 'react';
export default class Web extends Component {
    constructor(props) {
        super(props);
        this.state = {deleteButtonStyle: 'none'};
    }

	isShow() {
		if (this.props.keyword == null) {
			return true;
		}
		let lowerCaseKeyword = this.props.keyword.toLowerCase();
		if ( (this.props.data.Name || '').toLowerCase().indexOf(lowerCaseKeyword) > -1 
	        || (this.props.data.link || '').toLowerCase().indexOf(lowerCaseKeyword) > -1
            || (this.props.data.Note || '').toLowerCase().indexOf(lowerCaseKeyword) > -1) {
			return true
		}
		return false;
	}
	
    render() {
		let that = this;
		let link = this.props.data.link == null ? '' : (this.props.data.link.indexOf('http') > -1 ? this.props.data.link : 'http://' + this.props.data.link);
		let hide = false;


		if (this.isShow() === true) {
			return (
				<li className="list-group-item">
				<div className="list-group">
					<div className="list-group-item list-group-item-success">{this.props.data.title}</div>
					<a href={link} target="_blank" className="list-group-item list-group-item-info">{this.props.data.link}</a>
					<a href="#" className="list-group-item list-group-item-warning">{this.props.data.Note}</a>
					<div className="list-group-item list-group-item-success">
						<button onClick={ e => this.disMoreButton(e)}>Operate</button>
						<button style={{'display': this.state.deleteButtonStyle}} onClick={ e => this.deleteItem(e)}>Delete</button></div>
				</div>
				</li>
			);
		}
		return null;
	}

    disMoreButton(e) {
        if (this.state.deleteButtonStyle == 'none') {
        	this.setState({deleteButtonStyle: ''});
        } else {
            this.setState({deleteButtonStyle: 'none'});
		}
    }

    deleteItem(e) {
    	this.props.parent.deleteWeb(this.props.data.ID);
	}
}