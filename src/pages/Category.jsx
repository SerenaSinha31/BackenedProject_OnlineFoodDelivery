import React, { useState } from 'react' // Import useState hook
import Layout from '../components/Layout/Layout'
import '../styles/menu.css'
import { menu_list } from '../assets/assets'
import FoodDisplay from './FoodDisplay';


const Category = () => {
  const [category, setCategory] = useState("All"); // Initialize state variable

  return (
    <>
       <Layout>
         <div className='explore-menu' id='explore-menu'>
          <h1>Explore Our Menu</h1>
          <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes. Our Mission is to provide Best Quality Food.</p>
          <div className='explore-menu-list'>
          {menu_list.map((item, index) => {
            return(
              <div onClick={()=>setCategory(prev => prev === item.menu_name ? "ALL" : item.menu_name)} key={index} className={`explore-menu-list-item ${category === item.menu_name ? "active" : ""}`}>
                <img src={item.menu_image} alt=""/>
                <p>{item.menu_name}</p>
              </div>
            )
          })}
          </div>
          <hr/>
          <FoodDisplay category={category}/> 
         </div>
        </Layout>
    </>
  )
}

export default Category