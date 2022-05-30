import React from 'react'
import Header from './Components/Header'
import Home from './Components/pages/Home'
import Admin from './admin/NewItemAddd'
import SingleItem from './Components/pages/SingleItem'
import UpdateDB from './admin/UpdateDB'
import SuccessMessage from './Components/pages/SuccessMessage'
import Login from './admin/Login'
import Signup from './admin/Signup'
import Add_update from './admin/Add_update'
import Products from './admin/Products'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newitem" element={<Admin />} />
        <Route path="/additem" element={<Add_update />} />
        <Route path="/update/" element={<Products />} />
        <Route path="/update/:id" element={<UpdateDB />} />
        <Route path="/:id" element={<SingleItem />} />
        <Route path="/success" element={<SuccessMessage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
export default App;

//https://www.apni-shop.com/wp-content/uploads/2021/09/Appy-Fizz-Can.jpg
