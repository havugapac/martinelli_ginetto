import React, { useContext } from "react"
import CustomNavBar from './includes/navbar';
import Product from './includes/product';
import Footer from './includes/footer';
import {useNavigate, useRoutes,} from 'react-router-dom'
import { CartContext } from "./contexts/cart_context";
import Cartcad from "./includes/cartcard";
import Summary from "./includes/summary";
import { Row } from "react-bootstrap";

import { ReactComponent as ChevronLeft } from './../../media/chevronleft.svg'


export default function Cart(){
    var navigate=useNavigate()

    var {cart,setCart}=useContext(CartContext)


    return(
<div style={{backgroundColor:'#F5F5F4'}}>
<CustomNavBar />
<div style={{display:'flex',paddingLeft:15,backgroundColor:'#fff'}}>
        <ChevronLeft style={{marginTop:10}}/>
        <p onClick={(()=>navigate('/'))} style={{cursor:'pointer',marginLeft:15}}><u>Continue Shopping</u></p>
        </div>

        <div style={{paddingLeft:15,paddingRight:15,paddingBottom:15}}>

        <div style={{display:'flex'}}><h1>Cart</h1></div>

        <div style={{display:'flex'}}>{cart.length} products</div>
        <Row>
{
    cart.map((c,i)=><Cartcad key={i} product={c}/>)
}
{
    cart.length==0?<p style={{margin:50}}>Your cart is empty</p>:<></>
}
</Row>
</div>
<div style={{display:'flex',padding:15,justifyContent:'space-between',backgroundColor:'#fff'}}>ENTER THE COUPON CODE <span>+</span></div>

<div style={{padding:30}}>
   <button style={{borderRadius:50,backgroundColor:'black',padding:10}} onClick={(()=>navigate('/checkout'))}><font color="#fff" size="5">Proceed to Checkout</font></button>
</div> 
<Summary/>
 <Footer/>
</div>
    )
}
