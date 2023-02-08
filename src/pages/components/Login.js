
import axios from "axios";
import Cookies from 'js-cookie';
import {useState} from "react";

//const username = "vnpy", password = "vnpy"

function Login() {

  const [loginData, setLoginData] = useState({
    "username": "",
    "password": ""
  });

  // show the login page
  const [showLogin, setShowLogin] = useState(true);
  const [showLoginInfo, setShowLoginInfo] = useState(false);


  function getToken() {
    let pa = new FormData()
    pa.append("username", loginData.username)
    pa.append("password", loginData.password)

    axios({
      method: "POST",
      url: "/token",
      data: pa,
      headers: {
        'accept': 'application/json'
      }
    }).then((response) => {
      console.log("Login successful")
      console.log(response.data["access_token"])
      Cookies.set('token',response.data["access_token"])
    }).catch((error) => {
      if (error.response) {
        console.log(error.response);
      }
    })
  }
  const handleLogin = e => {
    e.preventDefault();
    getToken();
    if (Cookies.get('token')) {
      setShowLogin(!showLogin);
      setShowLoginInfo(!showLoginInfo);
    }


  }


  return (
            <div className={'login_form'}>
              <div style={showLogin ? { display: "block" } : { display: "none"}}>
                <form onSubmit={handleLogin}>
                  <p>Username
                  <input type="text" onChange={(e) => setLoginData({...loginData, username:e.target.value})}/>
                  </p>
                  <p>Password
                  <input type="password" onChange={(e) => setLoginData({...loginData, password:e.target.value})}/>
                  </p>
                  <button type="submit">Login</button>
                </form>
              </div>
              <div style={showLoginInfo ? { display: "block" } : { display: "none"}}>
                Login successfully.
              </div>
            </div>


  )
}
export default Login;