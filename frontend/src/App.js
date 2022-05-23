import React from 'react'
import Header from './Components/Header'
import Home from './Components/pages/Home'
import Admin from './Components/Admin'
import SingleItem from './Components/pages/SingleItem'
import UpdateDB from './Components/UpdateDB'
import ThankYouPage from './Components/pages/Navigation'
import Login from './Components/Login'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/additem" element={<Admin />} />
        <Route path="/update/:id" element={<UpdateDB />} />
        <Route path="/:id" element={<SingleItem />} />
        <Route path="/thanks" element={<ThankYouPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;

