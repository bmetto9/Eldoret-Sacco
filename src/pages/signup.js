import React, { useState, useEffect } from 'react';
import fire from '../files/firebase';
import { useHistory } from 'react-router';
import '../App.css';

export const Signup = () => {
  const [profile, setprofile] = useState('');
  const [url, seturl] = useState('');
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [mobile, setmobile] = useState('');
  const [admin, setadmin] = useState(false);
  const [authState, setAuthState] = useState({});

  const history = useHistory();

  const signUp = () => {
    var container = document.getElementById('container');
    container.classList.add("right-panel-active");
  };
  const signIn = () => {
    var container = document.getElementById('container');
    container.classList.remove("right-panel-active");
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setAuthState({ user })
        localStorage.setItem('user', user.uid)
      } else {
        setAuthState({ user: null })
        localStorage.removeItem('user')
      }
    })

    if(authState === null || undefined){
      history.push('/')
    }
  }

  useEffect(() => {
    authListener();
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(name, email, password, mobile)
      .then((res) => {
        alert('Account successfully created')
      })
      .catch((err) => {
        console.log(err);
        alert('An error occured')
      })
    setname('');
    setemail('');
    setpassword('');
    setmobile('');
  }

  const handleLogin = (e) => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(email, password)
      .then((res) => {
        history.push('/homepage')
      })
      .catch((err) => {
        console.log(err);
      })
    setemail('');
    setpassword('');
  }
  return (
    <div>
      <h2>Eldoret Sacco Booking App</h2>
      <div class="container" id="container">
        <div class="form-container sign-up-container">
          <form>
            <h1>Create Account</h1>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setname(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} />
            <input type="text" placeholder="Mobile" value={mobile} onChange={(e) => setmobile(e.target.value)} />
            <button onClick={handleSubmit}>Sign Up</button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form>
            <h1>Sign in</h1>
            <input type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Email" />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setpassword(e.target.value)} />
            <input type="checkbox" style={{ marginLeft: "-66%", width: "-webkit-fill-available" }} value={admin} onChange={(e) => setadmin(true)} /><a href="#" style={{ marginLeft: "-8%", marginTop: "-8%" }}>Pick If You Are Admin</a>
            <button onClick={handleLogin}>Sign In</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>Please login with your personal info</p>
              <button class="ghost" id="signIn" onClick={signIn}>Sign In</button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button class="ghost" id="signUp" onClick={signUp}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}
export default Signup;