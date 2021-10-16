import { connect } from 'react-redux';
import './App.css';
import AllCountries from './pages/all-countries';

function App() {
  return (
    <div className='main'>
      <AllCountries />
    </div>
  );
}

const mapStateToProps = state => state;
export default connect(mapStateToProps, null)(App);
