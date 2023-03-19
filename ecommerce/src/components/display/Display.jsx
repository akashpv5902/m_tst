import React from 'react'
import Advert from '../Advert/Advert'
import Items from '../items/Items'
import './display.css'

export default function Display() {
  return (
    <div>
      <div className="displayWrapper">
        <Advert/>
        {/* <div className="displayCategories">
            <div className="Cat1 text-center">Watch</div>
            <div className="Cat2  text-center">Bag</div>
            <div className="Cat3  text-center">Shoes</div>
        </div> */}
        <h2 className='text-center'>All Products..</h2>
        <div className="text-center">
            <Items/>
        </div>
      
      </div>
    </div>
  )
}
