// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Policy from './pages/Policy'
import Pagenoyfound from './pages/Pagenoyfound'
import Register from './pages/Auth/Register'
import Catlogin from './pages/Auth/Catlogin'
import Category from './pages/Category'
import Cart from './pages/Cart'






function App() {
  

  return (
    <>
   <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='/register'element={<Register/>}/>
    <Route path='/login'element={<Catlogin/>}/>
   <Route path='/category'element={<Category/>}/>
   <Route path='/cart'element={<Cart/>}/>
 
   
    <Route path='/about'element={<About/>}/>
    <Route path='/contact'element={<Contact/>}/>
    <Route path='/policy'element={<Policy/>}/>
    <Route path='*'element={<Pagenoyfound/>}/>
   </Routes>
   
     
    </>
  )
}

export default App
