import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Pages from './components/Pages';
import Features from './components/Features';
import Extensions from './components/Extensions';
import Tutorials from './components/Tutorials';
import Contact_us from './components/Contact_us';

function App() {
  return (
    <>
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} ></Route>
          {/* <Route path='/pages' element={<Pages />} ></Route>
          <Route path='/features' element={<Features />} ></Route>
          <Route path='/extensions' element={<Extensions />} ></Route>
          <Route path='/tutorials' element={<Tutorials />} ></Route>
          <Route path='/contact-us' element={<Contact_us />} ></Route> */}
        </Routes>
      </Router>
      
    </div>
    </>
  );
}

export default App;
