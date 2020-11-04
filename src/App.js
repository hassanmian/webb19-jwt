import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import UserKit from './data/UserKit';

function App() {
  const [emailInput, setEmailInput] = useState("webb19@willandskill.se")
  const [passwordInput, setPasswordInput] = useState("javascriptoramverk")

  const [token, setToken] = useState(null)
  const userKit = new UserKit()

  function handleOnClick() {
    handleLogin(emailInput, passwordInput)
  }

  function handleLogin(email, password) {
    userKit.login(email, password)
    .then(res => res.json())
    .then(data => {
      setToken(data.token)
      userKit.setToken(data.token)
    })
  }

  function fetchMe() {
    userKit.getMe()
    .then(res=>res.json())
    .then(data => console.log(data))
  }

  function fetchCustomerList() {
    userKit.getCustomerList()
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }

  return (
    <div>
      <h1>JWT</h1>
      <input 
        type="text" 
        value={emailInput} 
        onChange={e => setEmailInput(e.target.value)}
        placeholder="Email"
      />
      <input 
        type="password" 
        value={passwordInput}
        onChange={e => setPasswordInput(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleOnClick}>Login</button>

      {token && <button onClick={fetchMe}> Fetch Me </button> }
      {token && <button onClick={fetchCustomerList}> Get Customers </button> }
    </div>
  );
}

export default App;
