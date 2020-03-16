import React from 'react';
import logo from './logo.svg';
import './App.css';
import Registration from './Component/Registration';
import Login from './Component/Login'
import GetDemo from './Component/GetDemo';
import Ref from './Component/Ref';
import DashBoard from './Component/DashBoard';
import Router from './Routers/Router';
import GetAllNotes from './Component/GetAllNotes';


function App() {
  return (
    <div className="App">
     {/* <Login></Login> */}
      {/* <GetDemo></GetDemo> */}
      {/* <Ref></Ref> */}
      {/* <Registration></Registration> */}
      {/* <DashBoard></DashBoard> */}
      <Router></Router>
      {/* <GetAllNotes></GetAllNotes> */}
    </div>
  );
}

export default App;
