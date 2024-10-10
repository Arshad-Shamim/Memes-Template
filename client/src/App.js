import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import {Routes,Route, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Edit from './pages/edit';
import Signup from './pages/Authorization';
import Error from './pages/error';
import { useState } from 'react';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to="/Memes"/>}/>
        <Route path='/Memes' element={<Signup/>}/>
        <Route path='/Memes'>
          <Route path="home" element={<Home/>}/>
          <Route path="edit" element={<Edit/>}/>
        </Route> 
        <Route path="*" element={<Error error={"Page Not Founded"}/>}/>
      </Routes>
    </div>
  );
}

export default App;
