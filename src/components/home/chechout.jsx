import React, { useContext, useState } from "react"
import CustomNavBar from './includes/navbar';
import Product from './includes/product';
import Footer from './includes/footer';
import {useRoutes,} from 'react-router-dom'
import { CartContext } from "./contexts/cart_context";
import Checkoutcad from "./includes/checkoutcard";
import Summary from "./includes/summary";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Paypal from "./includes/paypal";

export default function Checkout(){
    
    var {cart,setCart}=useContext(CartContext)
    const [checkout, setChechout] = useState(false);



    var { cart, setCart } = useContext(CartContext)

    var total = cart.reduce((a, b) => {

        return a + (b.variants[b.selectedVariant].product.price_range.minimum_price.regular_price.value)

    }, 0)

    return(
<div style={{backgroundColor:'#F5F5F4'}}>
<CustomNavBar />
<Checkoutcad/>

<Row style={{padding:25}}>
    {/* Personal Information starts */}
    <Col xs={12} md={3} lg={3} style={{display:'grid'}}>
    <div style={{backgroundColor:'#fff',paddingLeft:8,marginTop:5}}>
     <h2 style={{justifySelf:'start'}}>Personal Information</h2>  
     <form>
       <div style={{justifySelf:'start',display:'flex'}}><label>First name</label></div>
       <div style={{justifySelf:'start',display:'flex'}}><input type='text' name='fname' placeholder='First name' style={{borderStyle:'none'}}/></div>
       <div style={{justifySelf:'start',display:'flex'}}><label>Last name</label></div>
       <div style={{justifySelf:'start',display:'flex'}}><input type='text' name='lname' placeholder='Last namer' style={{borderStyle:'none'}}/></div>
       <div style={{justifySelf:'start',display:'flex'}}><label>Email</label></div>
       <div style={{justifySelf:'start',display:'flex'}}><input type='text' name='email' placeholder='Email' style={{borderStyle:'none'}}/></div>
       <div style={{justifySelf:'start',display:'flex'}}><label>Phone Number</label></div>
       <div style={{justifySelf:'start',display:'flex'}}><input type='text' name='phone' placeholder='Phone Number' style={{borderStyle:'none'}}/></div>
    </form> 
    </div>
    </Col>
    {/* Personal information ends */}
     {/* Company Information starts */}
     <Col xs={12} md={3} lg={3} style={{display:'grid',marginTop:5}}>
     <div style={{backgroundColor:'#fff', paddingLeft:8}}>
     <h2 style={{justifySelf:'start'}}>Company Information</h2>  
     <form>
       <div style={{justifySelf:'start',display:'flex'}}><label>First name</label></div>
       <div style={{justifySelf:'start',display:'flex'}}><input type='text' name='fname' placeholder='First name' style={{borderStyle:'none'}}/></div>
       <div style={{justifySelf:'start',display:'flex'}}><label>Last name</label></div>
       <div style={{justifySelf:'start',display:'flex'}}><input type='text' name='lname' placeholder='Last namer' style={{borderStyle:'none'}}/></div>
       <div style={{justifySelf:'start',display:'flex'}}><label>Email</label></div>
       <div style={{justifySelf:'start',display:'flex'}}><input type='text' name='email' placeholder='Email' style={{borderStyle:'none'}}/></div>
       <div style={{justifySelf:'start',display:'flex'}}><label>Phone Number</label></div>
       <div style={{justifySelf:'start',display:'flex'}}><input type='text' name='phone' placeholder='Phone Number' style={{borderStyle:'none'}}/></div>
    </form> 
    </div>
    </Col>
    
    {/* Company information ends */}

     {/* Delivery Information starts */}
     <Col xs={12} md={3} lg={3} style={{display:'grid',marginTop:5}}>
     <div style={{backgroundColor:'#fff',paddingLeft:8}}>
     <h2 style={{justifySelf:'start'}}>Delivery Information</h2>  
     <form>
       <div style={{justifySelf:'start',display:'flex'}}><label>First name</label></div>
       <div style={{justifySelf:'start',display:'flex'}}><input type='text' name='fname' placeholder='First name' style={{borderStyle:'none'}}/></div>
       <div style={{justifySelf:'start',display:'flex'}}><label>Last name</label></div>
       <div style={{justifySelf:'start',display:'flex'}}><input type='text' name='lname' placeholder='Last namer' style={{borderStyle:'none'}}/></div>
       <div style={{justifySelf:'start',display:'flex'}}><label>Email</label></div>
       <div style={{justifySelf:'start',display:'flex'}}><input type='text' name='email' placeholder='Email' style={{borderStyle:'none'}}/></div>
       <div style={{justifySelf:'start',display:'flex'}}><label>Phone Number</label></div>
       <div style={{justifySelf:'start',display:'flex'}}><input type='text' name='phone' placeholder='Phone Number' style={{borderStyle:'none'}}/></div>
    </form> 
    </div>
    </Col>
    {/* Delivery information ends */}

     {/* Delivery Methods starts */}
     <Col xs={12} md={3} lg={3} style={{display:'grid',marginTop:5}}>
     <div style={{backgroundColor:'#fff',paddingLeft:8}}>
     <h2 style={{justifySelf:'start'}}>Delivery Methods</h2>  
     <form>
       <div style={{justifySelf:'start',display:'flex'}}><label>First name</label></div>
       <div style={{justifySelf:'start',display:'flex'}}><input type='text' name='fname' placeholder='First name' style={{borderStyle:'none'}}/></div>
       <div style={{justifySelf:'start',display:'flex'}}><label>Last name</label></div>
       <div style={{justifySelf:'start',display:'flex'}}><input type='text' name='lname' placeholder='Last namer' style={{borderStyle:'none'}}/></div>
       <div style={{justifySelf:'start',display:'flex'}}><label>Email</label></div>
       <div style={{justifySelf:'start',display:'flex'}}><input type='text' name='email' placeholder='Email' style={{borderStyle:'none'}}/></div>
       <div style={{justifySelf:'start',display:'flex'}}><label>Phone Number</label></div>
       <div style={{justifySelf:'start',display:'flex'}}><input type='text' name='phone' placeholder='Phone Number' style={{borderStyle:'none'}}/></div>
    </form> 
    </div>
    </Col>
    {/* Delivery methods ends */}
</Row>
<div style={{padding:30}}>
    {
        checkout ? (<Paypal total={total}/>): 
        (
<button style={{borderRadius:50,backgroundColor:'black',padding:10}} onClick={()=>setChechout(true)}><font color="#fff" size="5">Place Order</font></button>
        )
    }
   
</div> 
<Summary/>
 <Footer/>
</div>
    )
}
