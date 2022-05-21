import React from 'react'
import Header from './Components/Header'
import Home from './Components/pages/Home'
import AddItem from './Components/AddItem'
import Footer from './Components/Footer'
import SingleItem from './Components/pages/SingleItem'
import { Routes, Route } from 'react-router-dom'
function App() {



  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<><Home /><Footer /></>} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="/:id" element={<SingleItem />} />
      </Routes>
    </div>
  );
}

export default App;

//mongodb+srv://dersehdawit1983:<password>@cluster0.7ow2f.mongodb.net/?retryWrites=true&w=majority
//https://jsonmock.hackerrank.com/datetime