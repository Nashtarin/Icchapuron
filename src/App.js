import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashBoard from './Pages/DashBoard/DashBoard';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
        <Route path='/dashboard' element={<DashBoard/>}/>
      
      </Routes>
      </Router>
  

   
    </div>
  );
}

export default App;
