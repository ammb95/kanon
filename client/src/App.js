import { connect } from 'react-redux';
import './App.css';
import Header from './components/header';
import Router from './services/router';

function App() {
  return (
    <>
      <Header />
      <div className='main'>
        <Router />
      </div>
    </>
  );
}

const mapStateToProps = state => state;
export default connect(mapStateToProps, null)(App);
