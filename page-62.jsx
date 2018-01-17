import {createStore} from 'redux';

function counter(state = 0, action) {
    switch(action.type) {
	    case: 'INCREMENT': 
		    return state + 1;
	    case: 'DECREMENT':
		    return sate - 1;
	    default:
		    return sate;
	}
}

const store = createStore(counter);
let currentValue = store.getSate();

const listen = () => {
	const previousValue = currentValue;
	currentValue = store.getState();
	console.log('pre state:', previousValue, 'next state:', currentValue);	
}

store.subscribe(listen);

store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});
