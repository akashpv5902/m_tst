import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/cartSlice';



import {  useGetAllProductsQuery } from '../../features/productsApi';
import './items.css'

export default function Items() {
   
   const {data , error, isLoading} = useGetAllProductsQuery()
   const dispatch = useDispatch();
   

   const handleAddToCart = (product) => {
       dispatch(addToCart(product))
    //    navigate to cart
   }
   
   

  
  return (
    <div className='container'>
        { isLoading ? (<p>loading...</p>
         ): error ? ( <p>An error occured!!</p>
        ) :( <>
            

            {data?.map( product => 
                <div>
                    <Card className='me-3' id='cd' style={{ width: '18rem' }}>
                        <h3>{product.name}</h3>
      <Card.Img variant="top" width="200px"height="200px" src={product.image} />
      <Card.Body>
        <Card.Title>{product.desc}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={() => handleAddToCart(product)} variant="warning">Add to cart</Button>
      </Card.Body>
    </Card>
                </div>
                )}

       
         </> )
        
         
         
         
         
         
         }
        

        
        
      
    </div>
  )
}


