import React, {Component, PropTypes } from 'react'

function Button(props, context) {
	console.log(context);
    return (
	    <button style={{background: context.color}}>
	        {context.color}
		</button>
	);
}

Button.contextTypes = {
	color: PropTypes.string.isRequired
};

function Message(props) {
	return (
		<li>
		    {props.text} <Button>Delete A</Button>
		</li>
	);
}

Message.propTypes = {
    text: PropTypes.string.isRequired	
}

class MessageList extends Component {
    getChildContext() {
        return { color: '#00ff00' };
    }
	
	render() {
		const messages = [
			{text: 'Hello React'},
			{text: 'Hello Redux'}
		];
		
		const children = messages.map((message, key) => <Message key = {key} text = {message.text} />);
		
		return (
		    <div>
			    <p>组件</p>
				<ul>
				    {children}
				</ul>
		    </div>
		);
	}
}

MessageList.childContextTypes = {
	color: PropTypes.string.isRequired
};

console.log(<MessageList />);

export default MessageList;