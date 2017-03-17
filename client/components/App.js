import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// "connect" will inject the data from our store into whatever level
//   component actually need it rather than pass it down level by
//   level through multiple components via props
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
