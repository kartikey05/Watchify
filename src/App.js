import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login, selectUser } from './features/userSlice';

function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch()

useEffect(()=>{
  const unsubscribe=auth.onAuthStateChanged((userAuth)=>{
    if(userAuth){ 
      dispatch(
        login({
          uid:userAuth.uid,
          email:userAuth.email,
        })
      );
    }
    else{
      dispatch(logout)
    }
  }); 
  return unsubscribe;
},[dispatch]);
  return (
    <div className="app">
      <Router>
        {!user ?(
          <LoginScreen />
        ):(
        <Routes>
        <Route exact path="/profile" element={<ProfileScreen />} />

          <Route exact path="/" element={<HomeScreen />} />
        </Routes>)}
      </Router>
    </div>
  );
}

export default App;