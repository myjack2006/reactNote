import React, {Component, PropTypes} from 'react';
export default class Web extends Component {
	isShow() {
		if (this.props.keyword == null) {
			return true;
		}
		let lowerCaseKeyword = this.props.keyword.toLowerCase();
		if ( (this.props.data.Name || '').toLowerCase().indexOf(lowerCaseKeyword) > -1 
	        || (this.props.data.Link || '').toLowerCase().indexOf(lowerCaseKeyword) > -1
            || (this.props.data.Note || '').toLowerCase().indexOf(lowerCaseKeyword) > -1) {
			return true
		}
		return false;
	}
	
    render() {
		let that = this;
		let link = this.props.data.Link == null ? '' : (this.props.data.Link.indexOf('http') > -1 ? this.props.data.Link : 'http://' + this.props.data.Link);
		let hide = false;

		
		if (this.isShow() === true) {
			return (
				<li className="list-group-item">
				<div className="list-group">
					<div className="list-group-item list-group-item-success">{this.props.data.Name}</div>
					<a href={link} target="_blank" className="list-group-item list-group-item-info">{this.props.data.Link}</a>
					<a href="#" className="list-group-item list-group-item-warning">{this.props.data.Note}</a>
				</div>
				</li>
			);
		}
		return null;
	}
}