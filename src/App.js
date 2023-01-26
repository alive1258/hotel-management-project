import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Navbar from './common/Navbar/Navbar';
import About from './component/About/About';
import Gallery from './component/gallery/Gallery';
import Destionations from './component/Destinations/Home';
import SinglePage from './SinglePage/SinglePage';
import Blog from './component/Blog/Blog';
import BlogSingle from './component/Blog/blog-single-page/BlogSingle';
import Testimonial from './component/Testimonial/Testimonial';
import Contact from './component/Contact/Contact';
import Login from './component/login/Login';
import Register from './component/login/Register';

function App() {
  return (
    <div >
  <Router>
    <Navbar/>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/about' exact element={<About/>}/>
      <Route path='/gallery' exact element={<Gallery/>}/>
      <Route path='/destination' exact element={<Destionations />}/>
      <Route path='/singlepage/:id' exact element={<SinglePage />}/>
      <Route path='/blog' exact element={<Blog />}/>
      <Route path='/blogsingle/:id' exact element={<BlogSingle />}/>
      <Route path='/testimonial' exact element={<Testimonial />}/>
      <Route path='/contact' exact element={<Contact />}/>
      <Route path='/sign-in' exact element={<Login />}/>
      <Route path='/register' exact element={<Register />}/>

    </Routes>
  </Router>
    </div>
  );
}

export default App;
