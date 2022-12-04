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
import Avatars from './Pages/Avatars/Avatars';
import Alerts from './Pages/Alerts/Alerts';
import Badges from './Pages/Badges/Badges';
import BreadCrumb from './Pages/BreadCrumb/BreadCrumb';
import Buttons from './Pages/Buttons/Buttons';
import ButtonsGroup from './Pages/ButtonsGroup/ButtonsGroup';
import BoxShadow from './Pages/BoxShadow/BoxShadow';
import Colors from './Pages/Colors/Colors';
import Cards from './Pages/Cards/Cards';
import Carousel from './Pages/Carousel/Carousel';
import Image from './Pages/Image/Image';
import ListGroup from './Pages/ListGrpoup/ListGroup';
import Media from './Pages/Media/Media';
import Modal from './Pages/Modal/Modal';
import Notification from './Pages/Notification/Notification';
import Pagination from './Pages/Pagination/Pagination';
import Popovers from './Pages/Popovers/Popovers';
import ProgressBars from './Pages/ProgressBars/ProgressBars';
import Typography from './Pages/Typography/Typography';
import Tabs from './Pages/Tabs/Tabs';
import Tooltips from './Pages/Tooltips/Tooltips';
import Video from './Pages/Video/Video';
import FormElements from './Pages/FormElements/FormElements';
import FormInput from './Pages/FormInput/FormInput';
import FormValidation from './Pages/FormValidation/FormValidation';
import FormSwitch from './Pages/FormSwitch/FormSwitch';
import FormCheckbox from './Pages/FormCheckbox/FormCheckbox';
import FormRadio from './Pages/FormRadio/FormRadio';
import FormTextArea from './Pages/FormTextArea/FormTextArea';
import DatePicker from './Pages/DatePicker/DatePicker';
import Select2 from './Pages/Select2/Select2';
import FileUpload from './Pages/FileUpload/FileUpload';
import FormQuill from './Pages/FormQuill/FormQuill';
import BasicTable from './Pages/BasicTable/BasicTable';
import DataTable from './Pages/DataTable/DataTable';
import EditableTable from './Pages/EditableTable/EditableTable';
import Chart from './Pages/Chart/Chart';
import Icon from './Pages/Icon/Icon';
import Timeline from './Pages/Timeline/Timeline';
import FAQ from './Pages/FAQ/FAQ';
import BlankPage from './Pages/BlankPage/BlankPage';
import Maintenance from './Pages/Maintenance/Maintenance';
import ComingSoon from './Pages/ComingSoon/ComingSoon';
import Grid from './Pages/Grid/Grid';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<DashBoard/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/customer' element={<Customer/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/invoice' element={<Invoice/>}/>
        <Route path='/todo' element={<Todo/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='/timeline' element={<Timeline/>}/>
        <Route path='/faq' element={<FAQ/>}/>
        <Route path='/pricing' element={<FAQ/>}/>
        <Route path='/blankpage' element={<BlankPage/>}/>
        <Route path='/maintenance' element={<Maintenance/>}/>
        <Route path='/comingsoon' element={<ComingSoon/>}/>
        <Route path='/userprofile' element={<UserProfile/>}/>
        <Route path='/calender' element={<Calender/>}/>
       <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/resetpassword' element={<ResetPassword/>}/>
        <Route path='/confirmemail' element={<ConfirmEmail/>}/>
        <Route path='/lockscreen' element={<LockScreen/>}/>
        <Route path='/error404' element={<Error404/>}/>
        <Route path='/error500' element={<Error500/>}/>
        <Route path='/avatars' element={<Avatars/>}/>
        <Route path='/alerts' element={<Alerts/>}/>
        <Route path='/badges' element={<Badges/>}/>
        <Route path='/breadcrumb' element={<BreadCrumb/>}/>
        <Route path='/buttons' element={<Buttons/>}/>
        <Route path='/buttonsgroup' element={<ButtonsGroup/>}/>
        <Route path='/boxshadow' element={<BoxShadow/>}/>
        <Route path='/grid' element={<Grid/>}/>

       
        <Route path='/colors' element={<Colors/>}/>
        <Route path='/cards' element={<Cards/>}/>
        <Route path='/carousel' element={<Carousel/>}/>
        <Route path='/image' element={<Image/>}/>
        <Route path='/listgroup' element={<ListGroup/>}/>
        <Route path='/media' element={<Media/>}/>
        <Route path='/modal' element={<Modal/>}/>
        <Route path='/notification' element={<Notification/>}/>
        <Route path='/pagination' element={<Pagination/>}/>
        <Route path='/popovers' element={<Popovers/>}/>
        <Route path='/progressbars' element={<ProgressBars/>}/>
        <Route path='/typography' element={<Typography/>}/>
        <Route path='/tabs' element={<Tabs/>}/>
        <Route path='/tooltips' element={<Tooltips/>}/>
        <Route path='/video' element={<Video/>}/>
        <Route path='/formelements' element={<FormElements/>}/>
        <Route path='/forminput' element={<FormInput/>}/>
        <Route path='/formvalidation' element={<FormValidation/>}/>
        <Route path='/formswitch' element={<FormSwitch/>}/>
        <Route path='/formcheckbox' element={<FormCheckbox/>}/>
        <Route path='/formradio' element={<FormRadio/>}/>
        <Route path='/datepicker' element={<DatePicker/>}/>
        <Route path='/select2' element={<Select2/>}/>
        <Route path='/fileupload' element={<FileUpload/>}/>
        <Route path='/formquill' element={<FormQuill/>}/>
        <Route path='/basictable' element={<BasicTable/>}/>
        <Route path='/datatable' element={<DataTable/>}/>
        <Route path='/editabletable' element={<EditableTable/>}/>
        <Route path='/chart' element={<Chart/>}/>
        <Route path='/icon' element={<Icon/>}/>
        <Route path='/formtextarea' element={<FormTextArea/>}/>
      </Routes>
      </Router>
  

   
    </div>
  );
}

export default App;
