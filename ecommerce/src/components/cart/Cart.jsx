import React from 'react'
import './cart.css'
import { useEffect } from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { addToCart, clearCart, decreaseCart, getTotals, removeFromcart } from '../../features/cartSlice';

export default function Cart() {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  },[dispatch])

  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromcart(cartItem))

  }

  const handleDecreaseCart =(cartItem) => {
    dispatch(decreaseCart(cartItem))
  }

  const handleIncreaseCart= (cartItem) => {
    dispatch(addToCart(cartItem))
  }

  const handleClearCart= (cartItem) => {
    dispatch(clearCart())
  }
  return (
    <div className='cart-container'>
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className='cart-empty'>
          <p marginTop='20px'>Your Cart is Empty</p>
          <div className="start-shopping">
            <Link to='/'>
              <KeyboardBackspaceOutlinedIcon/>
              <span>start shopping</span>
            </Link>
          </div>
        </div>
      ) :

       (
       <div>
       <div className='titles'>
         <h3 className="product-title">Product</h3>
         <h3 className="price">Price</h3>
         <h3 className="Quantity">Quantity</h3>
         <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
         {cart.cartItems?.map(cartItem => (
          <div className="cart-item" key = {cartItem.id}>
            <div className="cart-product">
              <img src={cartItem.image}  alt={cartItem.name} />
              <div>
                <h3>{cartItem.name}</h3>
                <p>{cartItem.desc}</p>
                <button onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
              </div>
            </div>
            <div className="cart-product-price">${cartItem.price}</div>
            <div className="cart-product-quantity">
              <button onClick={() => handleDecreaseCart(cartItem)}> -</button>
              <div className="count">{cartItem.cartQuantity}</div>
              <button onClick={() => handleIncreaseCart(cartItem)}>+</button>
            </div>
            <div className="cart-product-total-price">
              ${cartItem.price * cartItem.cartQuantity}
            </div>

           

          
          
          </div>
          
        ))}

<div className="cart-summary">
              <button onClick={() => handleClearCart()} 
              className='clear-cart'>Clear Cart</button>
              <div className="cart-checkout">
                <div className="subtotal">
                  <span>Subtotal</span>
                  <span className="amount">${cart.cartTotalAmount}</span>
                  {/* <p>Taxes and shipping calculated at checkout</p> */}
                  <button>Check Out</button>
                
                </div>
              </div>
            </div>

            <div className="continue-shopping">
            <Link to='/'>
              <KeyboardBackspaceOutlinedIcon/>
              <span>Continue shopping</span>
            </Link>
          </div>
      </div>
      </div>
      
      
      )}
    </div>
  )
}
