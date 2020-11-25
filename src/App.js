import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import UserKit from './data/UserKit';
import { Switch, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import PrivateRouter from './components/PrivateRouter';
import PrivatePage from './pages/PrivatePage';

function App() {

  // function fetchMe() {
  //   userKit.getMe()
  //   .then(res=>res.json())
  //   .then(data => console.log(data))
  // }

  // function fetchCustomerList() {
  //   userKit.getCustomerList()
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //   })
  // }

  return (
    <div>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <PrivateRouter path="/private" component={PrivatePage} />
      </Switch>

      {/* {token && <button onClick={fetchMe}> Fetch Me </button> }
      {token && <button onClick={fetchCustomerList}> Get Customers </button> } */}
    </div>
  );
}

export default App;
