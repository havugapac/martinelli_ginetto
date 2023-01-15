import { ReactComponent as ChevronLeft } from './../../../media/chevronleft.svg'
import { useNavigate } from 'react-router-dom'
import  Row  from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ReactComponent as Heart } from './../../../media/heartIcon.svg'
import { ReactComponent as ProdColor } from './../../../media/prodcolor.svg'
import { ReactComponent as Trash } from './../../../media/trash.svg'

export default function Checkoutcad(){
    var navigate=useNavigate()
    return(
   <div>
            
        <div style={{display:'flex',paddingLeft:15,backgroundColor:'#fff'}}>
        <ChevronLeft style={{marginTop:10}}/>
        <p onClick={(()=>navigate('/'))} style={{cursor:'pointer',marginLeft:15}}><u>Continue Shopping</u></p>
        </div>

        <div style={{paddingLeft:15,paddingRight:15,paddingBottom:15}}>

        <div style={{display:'flex'}}><h1>Review and place order</h1></div>
        <div style={{backgroundColor:'#fff', padding:10}}>
        <div style={{display:'flex',backgroundColor:'#fff'}}>Total Items (5)</div>

        <Row>
        <Col xs={12} lg={3} md={3}>

        {/* Single cart product starts */}
        <div style={{padding:15,backgroundColor:'#fff',border:'1px solid #ABABAB'}}>
        {/* Product Image starts */}
        <div style={{ backgroundImage: "url('./images/catalog2.png')",backgroundRepeat:'no-repeat',backgroundSize:'cover',height:60,}}>
        <Heart style={{float:'right',marginTop:38,marginRight:10}}/>
        </div>
        {/* Product Image ends */}
        
        {/* Product name starts*/}
        <div style={{display:'flex'}}>Name of product lorem ipsum</div>
        {/* Product name ends*/}

        {/* Product name starts*/}
        <div style={{display:'flex',borderRadius:40, backgroundColor:'#F5F5F4',width:'70%'}}>
        <ProdColor/> &nbsp; Color Name
        </div>
        {/* Product name ends*/}

        {/* Product amount starts*/}
        <div style={{display:'flex'}}>
        <div style={{border:'1px solid #ABABAB',padding:4, marginTop:4}}>Product Quantity</div> &nbsp; 23
        </div>
        {/* Product amount ends*/}

        {/* Product Price starts*/}
        <div style={{display:'flex',marginTop:4}}>
        Price:  32324 USD
        </div>
        {/* Product Price ends*/}

        {/* Product Delete icon starts*/}
        <div style={{display:'flex',marginTop:4}}>
        <Trash/> &nbsp; <u>Eliminate</u>
        </div>
        {/* Product Delete icon ends*/}
            
            
        </div>        
        {/* Single cart product ends */}
        </Col>
       
    </Row>
    </div>
    {/* CartCard grid ends */}
        </div>

        
    </div>
    )
}