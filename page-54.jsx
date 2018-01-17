import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
	this.handler = this.handler.bind(this);
  }
  
  handler() {
    console.log('handler', this);
  }
  
  render() {
    console.log('render', this);
	return (
	  <div>
	    <h1 onClick={this.handler}>Hello world!</h1>
	  </div>
	);
  }
}

export default App;