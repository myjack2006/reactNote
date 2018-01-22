import React, {Component} from 'react';
import { createStore } from 'redux'
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
		    url: 'http://localhost:9000/getnotes/yanglihao',
			type: 'GET',
			dateType: 'jsonp',
			success: function(resp) {
				that.setState({
				    favorite: resp
				});
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
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
			that.state.favorite.list.map(web => {
			    webs.push(web);
		    });
		}
		
		return webs;
	}

    deleteWeb(ID) {
        this.props.parent.deleteWeb(ID)
        for (let i = 0; i < this.props.data.length; i++) {
            if (this.props.data[i].ID == ID) {
                this.props.data.slice(i, 1);
                break;
            }
        }
    }
	
	/*
	<TodoList todos = {visibleTodos} />
	*/
	
    render() {
	    const {dispatch, visibleTodos, keyword} = this.props;
		
		return (
		    <div>
			    <AddTodo
				    data={this.state}
					parent={this}
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