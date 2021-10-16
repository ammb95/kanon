import { connect } from 'react-redux';
import './App.css';

function App() {
  return <h1>Hello world!</h1>;
}

const mapStateToProps = state => state;
export default connect(mapStateToProps, null)(App);
