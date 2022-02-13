import React, { useEffect } from"react";
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";


function App() {

  const [{basket,user},dispatch]=useStateValue();

  useEffect(()=>{
    //will only run once
    auth.onAuthStateChanged(authUser=>{
      console.log('User is>>',authUser);
      if(authUser)
      {
        //user logged in or was logged in
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }
      else{
        //user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })

  },[])

  return (
    <Router>
    <div className="app">
      <Header/>

      <Switch>
        <Route path="/login">
          <Login/>
        </Route>

        <Route path="/checkout">
          <Checkout/>
        </Route>

        <Route path="/">
          <Home/>
        </Route>
      </Switch>

    </div>
    </Router>
  );
}

export default App;
