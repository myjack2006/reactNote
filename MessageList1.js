import React, { PropTypes } from 'react';

function Button(props) {
	return (
	    <button style={{ background: props.color}}>
		    {props.children}
		</button>
	);
}

Button.propTypes = {
	color: PropTypes.string.isRequired,
	children: PropTypes.string.isRequired	
};

function Message(props) {
	return (
	    <li>
		{props.text} <Button color={props.color}>Delete</Button>
		</li>
	);
}

Message.propTypes = {
	text: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired
};

function MessageList() {
	const color = 'gray';
	const message = [
	    {text: 'Hello React'},
		{text: 'Hello Redux'}
	];
	const children = message.map((message, key) =>
	    <Message key={key} text={message.text} color={color} />
	);
	
	return (
	    <div>
		<p>组件</p>
		<ul>
		{children}
		</ul>
		</div>
	);
}

export default MessageList;