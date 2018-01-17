import Counter from '../components/Counter';
import {connect} from 'react-redux';
import {increment, decrement, incrementIfOdd, incrementAsync} from '../actions';

export default connect(
    state => ({counter: state.counter}),
	dispatch => bindActionCreators(ActionCreators, dispatch)
)(Counter);