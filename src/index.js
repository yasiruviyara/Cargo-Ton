import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Pages from '../src/Pages/Pages';
import Services from './Services/Services';
import Blog from './Blog/Blog';
import Tracking from './Tracking/Tracking';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/pages' element={<Pages/>} />
       <Route path='/services' element={<Services/>} />
       <Route path='/blog' element={<Blog/>} />
       <Route path='/tracking' element={<Tracking/>} />


     </Routes>

  
  </BrowserRouter>
  
);


reportWebVitals();
