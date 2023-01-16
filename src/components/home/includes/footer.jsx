import { ReactComponent as MartinelliFooter } from "./../../../media/martinelli_footer.svg";
import { ReactComponent as Instagram } from "./../../../media/instagram.svg";
import { ReactComponent as Facebook } from "./../../../media/facebook.svg";
import { ReactComponent as Msb } from "./../../../media/msb.svg";
import { ReactComponent as Kohro } from "./../../../media/kohro.svg";
import { ReactComponent as NordCiniglia } from "./../../../media/nord_ciniglia.svg";
import { ReactComponent as Grignolis } from "./../../../media/grignoli.svg";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer(){
    return (
     <div style={{backgroundColor:'#000',paddingLeft:15,paddingRight:15}}>
      <div style={{display:'flex',width:'100%',justifyContent:'space-between',paddingTop:20,}}>
      <MartinelliFooter/>
      

      <div>
      <Instagram style={{marginRight:30}}/>
      <Facebook/>
      </div>
      

      </div>

      <div style={{display:'flex',paddingTop:25,paddingBottom:25,borderBottom:'2px solid #ccc'}}>
      <p><font color="white"><u>Contatti</u></font></p>
      </div>

    <div style={{display:'flex',paddingTop:25,paddingBottom:25}}>
     <p className="footerDescr">Dal 1947 lo spirito imprenditoriale MARTINELLIGINETTO si fonda sulle competenze tecniche, l’utilizzo delle tecnologie tessili più avanzate e sulla capacità di 
     mobilitare energie professionali e creative in grado di innovare il prodotto a tutti i livelli.</p>
      </div>
      
      <div style={{paddingTop:25,paddingBottom:25,borderBottom:'2px solid #ccc',color:'#fff'}}>
      <Row>
        <Col lg={3} md={3} xs={6}>
        <h3 style={{left:'0%'}}>Settori</h3>
        <p style={{left:'0%'}}>Filati</p>
        <p>Tessuti</p>
        <p>Nobilitazione</p>
        <p>Editoria</p>
        </Col>
        <Col lg={3} md={3} xs={6}>
        <h3 style={{left:'0%'}}>INNOVAZIONE</h3>
        <p>Creatività e Design</p>
        <p>Realtà produttiva</p>
        <p>Vision Digitale</p>
        </Col>
        <Col lg={3} md={3} xs={6}>
        <h3 style={{left:'0%'}}>Responsabilità</h3>
        <p>Economica</p>
        <p>Ambientale</p>
        <p>Sociale</p>
        </Col>
        <Col lg={3} md={3} xs={6}>
        <h3 style={{left:'0%'}}>CARRIERA</h3>
        <p>Giovani</p>
        <p>RScuola lavoro</p>
        <p>VLavora con noi</p>
        </Col>
      </Row>
     
     </div>

     <div style={{paddingTop:25,paddingBottom:25,borderBottom:'2px solid #ccc00'}}>
      <Row>
            
        <Col lg={3} md={3} xs={6}>
        <MartinelliFooter/>
        </Col>

        <Col lg={3} md={3} xs={6}>
        <Grignolis/>
        </Col>

        <Col lg={3} md={3} xs={6}>
        <Kohro/>
        </Col>

        <Col lg={3} md={3} xs={6}>
        <NordCiniglia/>
        </Col>

        <Col lg={3} md={3} xs={6}>
        <Msb/>
        </Col>
        
      </Row>
     
     </div>


    <div style={{display:'flex',paddingTop:25,paddingBottom:25}}>
    <p><font color="white" style={{textAlign:'left'}}>
    Martinelli Ginetto S.p.A<br/>
    C.F. e Partita Iva 03403660164<br/>
    Cap.Sociale 10.000.000 I.v. REA: BG – 375519</font></p>
     </div>

     <div style={{display:'flex',paddingTop:25,paddingBottom:25}}>
      <p><font color="white">
      <u>Privacy</u>&nbsp;&nbsp;&nbsp;
      <u>Cookie policy</u>
      </font></p>
      </div>
      
      

      </div>
    )
  };