import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashBoard from './Pages/DashBoard/DashBoard';
import Customer from './Pages/Customer/Customer';
import Product from './Pages/Product/Product';
import Order from './Pages/Order/Order';
import Invoice from './Pages/Invoice/Invoice';
import Todo from './Pages/Todo/Todo';
import Calender from './Pages/Calender/Calender';
import Chat from './Pages/Chat/Chat';
import UserProfile from './Pages/UserProfile/UserProfile';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import ConfirmEmail from './Pages/ConfirmEmail/ConfirmEmail';
import LockScreen from './Pages/LockScreen/LockScreen';
import Error404 from './Pages/Error404/Error404';
import Error500 from './Pages/Error500/Error500';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/customer' element={<Customer/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/invoice' element={<Invoice/>}/>
        <Route path='/todo' element={<Todo/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='/userprofile' element={<UserProfile/>}/>
        <Route path='/calender' element={<Calender/>}/>
       <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/resetpassword' element={<ResetPassword/>}/>
        <Route path='/confirmemail' element={<ConfirmEmail/>}/>
        <Route path='/lockscreen' element={<LockScreen/>}/>
        <Route path='/error404' element={<Error404/>}/>
        <Route path='/error500' element={<Error500/>}/>
      
      </Routes>
      </Router>
  

   
    </div>
  );
}

export default App;
