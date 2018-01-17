import React, {Component, PropTypes} from 'react';
export default class Search extends Component {
    render() {
	    return (
		    <div className="input-group col-md-3" style={{marginTop:"0px",positon:"relative"}}>
			    <input type="text" className="form-control"placeholder="请输入关键词" ref="input" />
				<span className="input-group-btn">  
					<button className="btn btn-info btn-search" onClick={ e => this.handleClick(e)}>查找</button>
				</span>  
		    </div>  
		);
	}
	
	handleClick(e) {
	    const node = this.refs.input;
		const text = node.value.trim();
		this.props.onFindClick(text);
		node.value = '';
	}
}