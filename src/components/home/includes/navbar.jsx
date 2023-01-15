import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { ReactComponent as Logo } from './../../../media/logo.svg'
import { ReactComponent as User } from './../../../media/user.svg'
import { ReactComponent as Menu } from './../../../media/menu.svg'

import { ReactComponent as Grignoli } from './../../../media/grignoli.svg'
import { ReactComponent as ArrowRight } from './../../../media/arrow-right.svg'
import { ReactComponent as ArrowLeft } from './../../../media/arrow-left.svg'
import { ReactComponent as Heart } from './../../../media/heartIcon.svg'
import { ReactComponent as ShoppingCart } from './../../../media/shopping-cart.svg'

import {useNavigate} from 'react-router-dom'
import { useContext } from 'react';
import {CartContext} from '../contexts/cart_context';
import { Badge } from 'react-bootstrap';

function CustomNavBar(props) {

    var navigate=useNavigate()
    var {cart,setCart}=useContext(CartContext)
console.log(cart)

    return (
        <>
            <Navbar bg="dark">
                <Container>
                    <Navbar.Brand href="#home"><Logo /></Navbar.Brand>
                    <div>
                        <User style={{ marginRight: 30 }} />
                        <Heart style={{ marginRight: 30 }}/>
                        <span onClick={(()=>navigate("/cart",))} style={{marginRight: 30,cursor:'pointer'}}><ShoppingCart/> <Badge style={{marginLeft:-17,marginTop:-17,height:20}} bg="primary" pill><label style={{fontSize:10}}>{cart.length}</label></Badge></span>
                        <Menu />
                    </div>
                    
                </Container>
            </Navbar>
            <NavBottom />
        </>
    );
}

function NavBottom() {
    return (
        <div>
        <div style={{ height: 50, width: '100%', backgroundColor: '#212529', alignItems: 'center', justifyContent: 'space-between' }}>
            <input type="text" name="search" placeholder="What Fabric are you looking for?" style={{width:'90%',borderRadius:'1.5em',height:'90%'}}/>
            <button type='button' className='btn btn-dark' style={{borderRadius:'1.5em', right:'5.5%',top:'12%', position:'absolute'}}>Search</button>
        </div>
        <div style={{ height: 90, width: '100%', backgroundColor: '#A3846B', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Grignoli />
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <h3>CATALOG</h3>

                <div style={{ display: 'flex', alignItems: 'center', marginRight: 20 }}>
                    <ArrowLeft />
                    <p style={{ marginBottom: 0, marginRight: 10, marginLeft: 10 }}><font size='5'>SOLUTIONS</font></p>
                    <ArrowRight />
                </div>
            </div>
        </div>
        </div>

    )
}

export default CustomNavBar;