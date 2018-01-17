import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo, find} from './actions/actions';

import AddTodo from './components/AddTodo.jsx';
import TodoList from './components/TodoList.jsx';
import Search from './components/Search.jsx';
import Webs from './components/Webs.jsx';

class App extends Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		var that = this;
		$.ajax({
		    url: 'data/SendDataToClient.json',
			type: 'GET',
			dateType: 'json',
			data: 'tele',
			async: false,
			scriptCharset: 'utf-8',
			success: function(resp) {
				that.setState({
				    favorite: resp
				});
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				debugger;
			    alert(XMLHttpRequest.status);
			    alert(XMLHttpRequest.readyState);
			    alert(textStatus);
			},
            complete: function(XMLHttpRequest, textStatus) {
                //this; // 调用本次AJAX请求时传递的options参数
            }
		});
	}
	
	getWebs() {
		let that = this;
		let webs = [];
		if (that.state != null && that.state.favorite != null) {
			that.state.favorite.page.Mtables.table.map(table => {
				if (table.Mrows != null && table.Mrows.row != null && table.Mrows.row.map != null) {				
					table.Mrows.row.map(row => {
						if (row.Mrowwebs != null && row.Mrowwebs.web != null && row.Mrowwebs.web.map != null) {
							row.Mrowwebs.web.map( web => {
								webs.push(web);
							});
						}
					});
				}
			    
		    });
		}
		
		return webs;
	}
	
	/*
	<TodoList todos = {visibleTodos} />
	*/
	
    render() {
	    const {dispatch, visibleTodos, keyword} = this.props;
		debugger;
		
		return (
		    <div>
			    <AddTodo
				    data={this.state}
				    onAddClick = {text => dispatch(addTodo(text))}
				/>
				
				<Search onFindClick = {text => dispatch(find(text))} />
				<Webs data = {this.getWebs()} keyword = {this.props.keyword} />
			</div>
		);
	}
}

function select(state) {
    return {
	    visibleTodos: state.todos.visibleTodos,
		keyword: state.todos.keyword
	}
}

export default connect(select)(App);