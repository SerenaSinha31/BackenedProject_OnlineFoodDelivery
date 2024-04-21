import React, { useContext } from 'react'
import Layout from '../components/Layout/Layout'
import { StoreContext } from '../context/StoreContext';
import { Link } from 'react-router-dom';

import '../styles/cart.css'

const Cart = () => {
  const{cartItems,food_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext);
  return (
    <>
    <Layout>
     <div className='cart'>
          <div className="cart-items">
           
              <div className="cart-items-title">
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
              </div>
              <br />
              <hr />
              {food_list.map((item,index)=>{
                if(cartItems[item._id]>0)
                {
                  return(
                    <div>
                        <div className='cart-items-title cart-items-item'>
                      <img src={item.image} alt=""/>
                      <p>{item.name}</p>
                      <p>Rs.{item.price}</p>
                      <p>{cartItems[item._id]}</p>
                      <p>Rs.{item.price*cartItems[item._id]}</p>
                      <p onClick={()=>removeFromCart(item._id)}className='cross'>*</p>
            

                    </div>
                    <hr/>



                    </div>
                  
                  )
                }

              })}
            </div>
            <div className="cart-bottom">
              <div className="cart-total">
                <h2>Cart Totals</h2>
                <div>
                <div className="cart-total-details">
                  <p>Subtotal</p>
                  <p>Rs.{getTotalCartAmount()}</p>



                </div>
                <hr/>
                <div className="cart-total-details">
                  <p>Delivery Fee</p>
                  <p>Rs.{50}</p>


                </div>
                <hr/>
                <div className="cart-total-details">
                  <b>Total</b>
                  <b>Rs.{getTotalCartAmount()+50}</b>


                </div>
              
               

              </div>
              <Link to="/">
  <button>PROCEED TO CHECKOUT</button>
</Link>

             

             
            </div>
            <div className="cart-promocode">
              <div>
                <p>
                  If you have promo code, Enter it here
                </p>
                <div className='cart-promocode-input'>
                  <input type="text" placeholder='promo-code'/>
                  <button>Submit</button>

                </div>
              </div>

            </div>
       
          </div>
          </div> 

    </Layout>
    </>
  )
}

export default Cart
