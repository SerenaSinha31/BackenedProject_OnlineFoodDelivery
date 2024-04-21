import React from 'react';
import{NavLink,Link} from 'react-router-dom'
import { IoFastFood } from "react-icons/io5";
import { useAuth } from '../../context/auth';
import {toast} from 'react-hot-toast';

const Header = () => {
  const[auth,setAuth] = useAuth();
  const handleLogout =() =>{
      setAuth({
        ...auth, user:null,token:''
      })
      localStorage.removeItem('auth');
      toast.success('Logout Sucessfully');
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary  ">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to='/' className="navbar-brand" ><IoFastFood/> Taste-Bust</Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to='/' className="nav-link "  >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/category' className="nav-link "  >Menu</NavLink>
              </li>
              {
                !auth.user? (<>
                 <li className="nav-item">
                <NavLink to='/Register' className="nav-link" href="#">Register</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/Login' className="nav-link" href="#">Login</NavLink>
              </li></>) : (<><li className="nav-item">
                <NavLink onClick={handleLogout} to='/login' className="nav-link" href="#">Logout</NavLink>
              </li></>)
              }
              <li className="nav-item">
                <NavLink to='/Cart' className="nav-link" href="#">Cart</NavLink>
              </li>
             
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;


