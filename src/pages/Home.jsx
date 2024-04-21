import React from 'react'
import Layout from '../components/Layout/Layout'
import { useAuth } from '../context/auth'
import '../styles/header.css'



const Home = () => {
  const [auth, setAuth]=useAuth()
  // const[category,setCategory] = useState("All")
  return (
    <Layout>
      <div className='header'>
      <img
            src="/images/header.jpg"
            alt="contactus"
          
          />
      
        <div className='header-contents'>
        
      
       
        <h1>Order your favourite food here</h1>
      <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredents to satisfy your craving and elevate your dining experince, one delicious meal at a Time.</p>
      <button>View Menu</button>
      
        </div>
        
      
        </div>
   
      
    </Layout>
  )
}

export default Home
