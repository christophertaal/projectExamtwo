import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Enquiry from './pages/Enquiry';
import ListOfEnquiry from './components/ListOfEnquery';
import LoginPage from './pages/LoginPage';
import LogoutPage from './pages/LogoutPage';
import AdminPage from './pages/AdminPage';
import ContactPage from './pages/ContactPage';
import ContactInfoPage from './pages/ContactInfoPage';

import Navbar from './components/Navbar';

import { Route, Switch } from 'react-router-dom';



function App() {
  return <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms/" component={Rooms} />
      <Route exact path="/enquiry/" component={Enquiry} />
      <Route exact path="/enquiry-list/" component={ListOfEnquiry} />
      <Route exact path="/contact-list/" component={ContactInfoPage} />
      <Route exact path="/contact/" component={ContactPage} />
      <Route exact path="/login/" component={LoginPage} />
      <Route exact path="/logout/" component={LogoutPage} />
      <Route exact path="/rooms/:slug" component={SingleRoom} />
      <Route exact path="/admin/" component={AdminPage} />
      <Route component={Error} />
    </Switch>
  </>
}

export default App;
