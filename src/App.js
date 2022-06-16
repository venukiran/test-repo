import logo from './logo.svg';
import React, { Component }  from 'react';
import './App.css';
import { Router, Routes, Route } from 'react-router-dom';

//import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import DetailTabs from './components/DetailTabs';
import AlbumView from './components/AlbumView';
import SignIn from '../src/components/SignIn';
import SignUp from '../src/components/SignUp';
import MyAppBar from "./MyAppBar";

export const LoginRoute = "/";
export const ProjectsRoute = "/home/";

function App() {
    return (        
      <div> 
        <MyAppBar/>
        <Routes>
          <Route path="/" exact element={<SignIn/>} />
          <Route path="Tabs" exact element={<DetailTabs/>} />          
          <Route path="AlbumView" element={<AlbumView/>} />         
          <Route path="SignIn" element={<SignIn/>} />
          <Route path="SignUp" element={<SignUp/>} />
        </Routes >
      </div>  
    );
}
export default App;