import React,{useState} from 'react'
import Layout from '../../components/Layout/Layout'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;



import {toast} from 'react-toastify'
const Register = () => {
  const[name,setName] = useState('')
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const[phone,setPhone] = useState('')
  const[address,setAddress] = useState('')
  const navigate = useNavigate()


  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${apiBaseUrl}/auth/register`, {
        name,
        email,
        password,
        phone,
        address
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate('/login');
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };
  


  return (
    <Layout title='Register -   Food Website'>
    <div className="form-container">
    




<h1>Register Page</h1>
<form onSubmit={handleSubmit}>
<div className="mb-3">
    
    <input type="text" 
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="form-control" id="exampleInputName" placeholder='Enter your name' 
    required/>
   </div>
  <div className="mb-3">
    
    <input type="email" 
     value={email}
     onChange={(e) => setEmail(e.target.value)}
    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your E-mail' 
    required/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  
  
  <div className="mb-3">
    
    <input type="password" 
     value={password}
     onChange={(e) => setPassword(e.target.value)}
    className="form-control" id="exampleInputPassword1"placeholder='Enter your Password'  
    required/>
  </div>

  <div className="mb-3">
   
    <input type="text" 
     value={phone}
     onChange={(e) => setPhone(e.target.value)}
    className="form-control" id="exampleInputPhone"placeholder='Enter your Number'  
    required/>
  </div>
  <div className="mb-3">
    
    <input type="text" 
     value={address}
     onChange={(e) => setAddress(e.target.value)}
     
    className="form-control" id="exampleInputAddress" placeholder='Enter your Address' 
    required/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    </div>
    </Layout>
  )
}

export default Register
