import {useContext, usetate} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as ArrowRight } from './../../../media/arrow-right.svg'
import { ReactComponent as ArrowLeft } from './../../../media/arrow-left.svg'

import {useState} from'react'
import { CartContext } from '../contexts/cart_context';
import { Button } from 'react-bootstrap';

export default function Catalog(props) {

    var {images,title,product}=props

    const [index,setCurrentIndex]=useState(0)

    var {cart,setCart}=useContext(CartContext)

    const addToCart=(p)=>{
        var newCart=[...cart]
        p['selectedVariant']=index;
        newCart.push(p)
        setCart(newCart)
    }

    return (

        <div style={{marginTop:30}}>
            <CustomSlider images={product.variants.map((m,i)=>m.product.media_gallery[0])} index={index}/>
            <h3 style={{margin:10}}>{title}</h3>
            <img src='./../../../../images/brignoli.png' style={{height:50}} alt="Brigoneli"/>
            <p style={{marginTop:10}}>From: {product.variants[index].product.price_range.minimum_price.regular_price.value} {product.variants[index].product.price_range.minimum_price.regular_price.currency}</p>
            <div style={{margin:20,display:'flex',justifyContent:'center'}}>
                {
                    product.variants.map((c,i)=><div style={{height:25,width:25,backgroundColor:""+c.attributes[0].label+"",borderRadius:30,marginRight:5,border:1,borderColor:'black',borderStyle:'solid',cursor:'pointer'}} onClick={(()=>{setCurrentIndex(i)})}/>)
                }
            <p></p>
            </div>
            <Button onClick={(()=>addToCart(product))}>Add to cart</Button>
        </div>

    )
}

function CustomSlider(props) {
    
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
      };

      var {images,index}=props

      var [slider,setSlider]=useState()

      return (
        <div style={{display:'grid',alignItems:'center'}}>
     
          <Slider ref={c =>{ 
            setSlider(c)
            if(c!=null){
             c.slickGoTo(index)
            }
            }} {...settings} style={{display:'grid'}}>
           {
            images.map((image,i)=> <div style={{height:400,display:'block'}}>
            <img src={image.url} alt={image.label} style={{width:'100%',height:400}}/>
          </div>)
           }
            
          </Slider>
          
          <div style={{width:'100%',display:'flex',justifyContent:'space-between',alignSelf:'center',marginTop:-400}}>
          <button style={{height:50,width:50, borderRadius:50,marginLeft:15,backgroundColor:'black',opacity:0.4}} onClick={(e)=>{
            {slider.slickPrev()}
          }}><ArrowLeft/></button>
          <button style={{height:50,width:50, borderRadius:50,marginRight:15,backgroundColor:'black',opacity:0.4}} onClick={(e)=>{
            {slider.slickNext()}
          }}><ArrowRight/></button>
          </div>
          
        </div>
      );
  }