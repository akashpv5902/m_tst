import React from 'react'
import './navbar.css'
import {Badge, Box, IconButton} from '@mui/material'
import {Link} from "react-router-dom"
import {useSelector} from 'react-redux'
import{
    PersonOutlined,
    ShoppingBagOutlined,
    SearchOutlined,
} from '@mui/icons-material'



export default function Navbar() {
  const cart = useSelector((state) => state.cart)
  return (
    <div>
          <Box
    display="flex"
    alignItems="center"
    width="100%"
    height="60px"
    backgroundColor="rgba(255, 255, 255, 0.95)"
    color="black"
    position="fixed"
    top="0"
    left="0"
    zIndex="1"
    >
      <Box
      width="80%"
      margin="auto"
      display="flex"
      justifyContent="space-between"
      alignItems="center">
        
        <Link to='/'>
        <Box
        
        sx={{ '&:hover': { cursor : "pointer"}}}
        color="red">

           <h2 className='text-decoration-none fw-bolder'>TRENDiNG...</h2> 
        </Box>
        </Link>

      </Box>

      <Box
      display="flex"
      justifyContent="space-between"
      columnGap="20px"
      zindex="2"
      >

        <IconButton sx={{ color:"black"}}>
            <SearchOutlined/>
        </IconButton>
        <IconButton sx={{ color:"black"}}>
            <PersonOutlined/>
        </IconButton>
        <Badge
        badgeContent={cart.cartItems.length}
        color="secondary"
        invisible={cart.cartItems.length === 0}
        sx={{
            "& .MuiBadge-badge": {
                right:5,
                top:5,
                padding: "0 4px",
                height: "14px",
                minWidth:"13px",
            },
        }}
        >
          <Link to='/cart'>
        <IconButton
        // onClick={() => dispatch(setIsCartOpen({}))}
        sx={{ color:"black"}}
        >
            <ShoppingBagOutlined/>
        </IconButton>
        </Link>
        </Badge>
        

      </Box>
        

    </Box>
      
    </div>
  )
}
