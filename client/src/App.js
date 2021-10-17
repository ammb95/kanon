import { connect } from 'react-redux';
import './App.css';
import ManyCountriesSearch from './pages/many-countries-search';

function App() {
  return (
    <div className='main'>
      <ManyCountriesSearch />
    </div>
  );
}

const mapStateToProps = state => state;
export default connect(mapStateToProps, null)(App);
