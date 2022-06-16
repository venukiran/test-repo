import logo from './logo.svg';
import React, { Component }  from 'react';
import './App.css';
import { withRouter } from 'react-router-dom';
import { Router, Routes, Route, Link } from 'react-router-dom';

//import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import TempleView from './components/TempleView';
import SignIn from '../src/components/SignIn';
import SignUp from '../src/components/SignUp';
import MyAppBar from "./MyAppBar";

export const LoginRoute = "/";
export const ProjectsRoute = "/home/";

function App() {
    return (        
      <div> 
        <MyAppBar/>
        
       
      </div>  
    );
}
export default App;