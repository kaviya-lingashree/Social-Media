import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/home/Home';
import { Login } from './Pages/Login';
import { Navbar } from './Components/Navbar';
import { CreatePost } from './Pages/create-post/create-post';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/createpost' element={<CreatePost />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
