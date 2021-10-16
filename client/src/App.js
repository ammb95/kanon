import { connect } from 'react-redux';
import './App.css';
import SearchCountries from './pages/search-countries';

function App() {
  return (
    <div className='main'>
      <SearchCountries />
    </div>
  );
}

const mapStateToProps = state => state;
export default connect(mapStateToProps, null)(App);
