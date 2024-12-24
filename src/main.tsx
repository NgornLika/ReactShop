import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Add from './components/AddProducts.tsx'
import Home from './components/Home.tsx'
import AllProduct from './components/AllProduct.tsx'
import About from './components/About.tsx'
import Contact from './components/Contact.tsx'
import ProductDetail from './components/ProductDetail.tsx'
import { CartProvider } from './components/CardContext.tsx'
import "wowjs"
import 'animate.css';
//login and register
import Register from './components/Register.tsx'
import Login from './components/Login.tsx'
import Card from './components/Card.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <CartProvider>
        <Router>
          <Routes>
            <Route path='/' element={<App/>}>
              <Route path='/register' element={<Register/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/' element={<Home/>}/>
              <Route path='/add' element={<Add/>}/>
              <Route path='/all' element={<AllProduct/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/card' element={<Card/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/product/:id' element={<ProductDetail/>}/>
            </Route>
          </Routes>
        </Router>
      </CartProvider>
  </React.StrictMode>
)
