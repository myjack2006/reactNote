import React, {Component} from 'react';
import { createStore } from 'redux'
import {connect} from 'react-redux';
import {addTodo, find} from './actions/actions';

import AddTodo from './components/AddTodo.jsx';
import TodoList from './components/TodoList.jsx';
import Search from './components/Search.jsx';
import Webs from './components/Webs.jsx';

const host = location.href.match(/^(http|ftp|https):\/\/[\w\-_]+(\.*[\w\-_]+)+/gi)[0];

class App extends Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount() {
		var that = this;
		$.ajax({
		    url: host + ':9000/getnotes/yanglihao',
            //url: 'http://59.111.96.250:9000/getnotes/yanglihao',
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
		var webs = this.state.favorite.list;
        for (let i = 0; i < webs.length; i++) {
            if (webs[i].ID == ID) {
                webs.splice(i, 1);
                $.ajax({
                    url: host + ':9000/deletenote/yanglihao',
                    type: 'GET',
                    dateType: 'jsonp',
					data: 'ID=' + ID,
                    success: function(resp) {

                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                        alert(XMLHttpRequest.status);
                        alert(XMLHttpRequest.readyState);
                        alert(textStatus);
                    },
                    complete: function(XMLHttpRequest, textStatus) {

                    }
                });
                break;
            }
        }
        this.setState({favorite: {list: webs}});
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
				<Webs data = {this.getWebs()} keyword = {this.props.keyword} parent={this} />
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