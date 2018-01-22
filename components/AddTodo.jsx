import React, {Component, PropTypes} from 'react';

const host = location.href.match(/^(http|ftp|https):\/\/[\w\-_]+(\.*[\w\-_]+)+/gi)[0];

export default class AddTodo extends Component {
    render() {
	    return (
            <div>
				<div>
					<label>Title</label>
					<input ref="title" id="exampleInputEmail1" />
				</div>
				<div>
                    <label>Link</label>
                    <input ref="link" id="exampleInputEmail1" />
				</div>
                <div>
                    <label>Note</label>
                    <input ref="note" id="exampleInputEmail1" />
                </div>
				<button onClick={(e) => this.handleClick(e)}>Submit</button>
			</div>
        );
    }
	
	handleClick(e) {
        /*
	    const node = this.refs.input;
		const text = node.value.trim();
		this.props.onAddClick(text);
		node.value = '';
		*/
        var that = this;
        var postData = {
            title: this.refs.title.value.trim(),
            link: this.refs.link.value.trim(),
            note: this.refs.note.value.trim()
        };

        $.ajax({
            url: host + ':9000/addnote/yanglihao',
            type: 'GET',
            dateType: 'jsonp',
            data: postData,
            success: function(resp) {
                that.props.parent.state.favorite.list.push(resp.data);
                that.props.parent.setState({
                    favorite: that.props.parent.state.favorite
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
}