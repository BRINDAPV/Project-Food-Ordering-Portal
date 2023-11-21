import React from 'react'
import PersistentDrawerLeft from './Components/Home_Page_Files/SideBar';
import './Common.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Apped from './Components/Login-Register/SignIn';
import Footer from './Components/Footer_Files/Footer';
import ExistingUserPage from './Components/Home_Page_Files/ExistingUserPage';
// import OrderNowContainer from './Components/OrderNow';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={PersistentDrawerLeft} />
        <Route path="/login" component={Apped} />
        <Route path="/SideB" component={ExistingUserPage}/>
        {/* i have added /SideBar.js in terms of /SideB */}
        {/* inside of the SignIn i have used the useHistory */}

        <Route component={PersistentDrawerLeft} />
      </Switch>
      <><Footer/></>
      {/* <OrderNowContainer/> */}
    </Router>
    );
};


export default App;