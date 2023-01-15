
import  Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ReactComponent as Heart } from './../../../media/heartIcon.svg'
import { ReactComponent as ProdColor } from './../../../media/prodcolor.svg'
import { ReactComponent as Trash } from './../../../media/trash.svg'
import { useContext } from 'react'
import { CartContext } from '../contexts/cart_context'

export default function Cartcad(props){
  
    var {cart,setCart}=useContext(CartContext)

    var {product}=props

    const removeItem=(id)=>{

        var items=[...cart]
        items = items.filter(item => item.id !== id)
        setCart(items)
    }

    return(

        
        <Col xs={12} lg={3} md={3}>

        {/* Single cart product starts */}
        <div style={{padding:15,border:'1px solid #ABABAB',backgroundColor:'#fff',marginTop:5}}>
        {/* Product Image starts */}
        <div style={{ backgroundImage: "url('./images/catalog2.png')",backgroundRepeat:'no-repeat',backgroundSize:'cover',height:60,}}>
        <Heart style={{float:'right',marginTop:38,marginRight:10}}/>
        </div>
        {/* Product Image ends */}
        
        {/* Product name starts*/}
        <div style={{display:'flex'}}>{product.name}</div>
        {/* Product name ends*/}

        {/* Product name starts*/}
        <div style={{display:'flex',borderRadius:40, backgroundColor:'#F5F5F4',width:'70%'}}>
        <div style={{height:25,width:25,backgroundColor:""+product.variants[product.selectedVariant].attributes[0].label+"",borderRadius:30,marginRight:5,border:1,borderColor:'black',borderStyle:'solid',cursor:'pointer'}}/> &nbsp; {product.variants[product.selectedVariant].attributes[0].label}
        </div>
        {/* Product name ends*/}

        {/* Product amount starts*/}
        <div style={{display:'flex'}}>
        <div style={{border:'1px solid #ABABAB',padding:4, marginTop:4}}>Product Quantity</div> &nbsp; 23
        </div>
        {/* Product amount ends*/}

        {/* Product Price starts*/}
        <div style={{display:'flex',marginTop:4}}>
        Price: {product.variants[product.selectedVariant].product.price_range.minimum_price.regular_price.value} {product.variants[product.selectedVariant].product.price_range.minimum_price.regular_price.currency}
        </div>
        {/* Product Price ends*/}

        {/* Product Delete icon starts*/}
        <div style={{display:'flex',marginTop:4}}>
        <Trash/> &nbsp; <u onClick={(()=>removeItem(product.id))}>Eliminate</u>
        </div>
        {/* Product Delete icon ends*/}
            
            
        </div>        
        {/* Single cart product ends */}
        </Col>
       
    


        

    )
}