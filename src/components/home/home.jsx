import { useState, useEffect } from 'react';
import Catalog from './includes/catalog';
import CustomNavBar from './includes/navbar';
import Product from './includes/product';
import Footer from './includes/footer';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext } from 'react';

import axios from 'axios';
import {CartContext} from './contexts/cart_context';

var catalogs = [
    {
        image: "./images/catalog2.png",
        title: "Tessuti",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    },
    {
        image: "./images/catalog3.png",
        title: "Category",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
    {
        image: "./images/catalog.png",
        title: "Category",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
]

export default function Home() {

    
    useEffect(() => {
        getData()
    }, [])


    var [products, setProducts] = useState({
        "loading": false,
        "error": false,
        "data": []
    })

    const getData = () => {
        var data = JSON.stringify({
            query: `{

                products(filter:{category_id: {in: ["16"]}}){
                
                items{
                    id
                    name
                    sku
                    short_description{
                        html
                    }
                    description{
                        html
                    }
                    ... on ConfigurableProduct {
                        configurable_options {
                          id
                          attribute_id
                          label
                          position
                          use_default
                          attribute_code
                          values {
                            value_index
                            label
                            swatch_data{
                              value
                            }
                          }
                          product_id
                        }
                        variants {
                          product {
                            id
                            name
                            sku
                            attribute_set_id
                            ... on PhysicalProductInterface {
                              weight
                            }
                            media_gallery{
                        url
                        label
                    }
                            price_range{
                              minimum_price{
                                regular_price{
                                  value
                                  currency
                                }
                              }
                            }
                          }
                          attributes {
                            label
                            code
                            value_index
                          }
                        }
                      }
                    media_gallery{
                        url
                        label
                    }
                    price_range{
                        minimum_price{
                            regular_price{
                                value
                                currency
                            }
                            final_price{
                                value
                                currency
                            }
                            discount{
                                amount_off
                                percent_off
                            }
                
                        }
                
                        maximum_price{
                            regular_price{
                                value
                                currency
                            }
                            final_price{
                                value
                                currency
                            }
                            discount{
                                amount_off
                                percent_off
                            }
                
                        }
                    }
                
                }
                
                
                }
                }`,
            variables: {}
        });

        var config = {
            method: 'post',
            url: 'http://martinelli.ginetto.com/graphql',
            headers: {
                'Content-Type': 'application/json',
                'Cookie': 'PHPSESSID=cn5g5er2utljflhqctkuofgkt5; private_content_version=ebf4f64b73d55124549a59a449eb17e2'
            },
            data: data
        };
        axios(
            config
        ).then((response) => {
            setProducts({ ...products, data: response.data.data.products.items })
            console.log(JSON.stringify(response.data));

        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div>
            <CustomNavBar />

            <div>
                <p className='intro'><b>Creativity, pure Italian style and continuous research, in order to infuse jacquard fabrics that are rich in tradition with contemporary spirit.</b></p>
            </div>
            <div>
                <p className='description'>
                    A family tradition of artisan textile production, dedicated to the creation of high-end yarn-dyed jacquard fabrics, all of which are made in Italy.

                    Today, the BRIGNOLI brand is widely recognised for its honed stylistic skill, its creative sophistication and its attention to detail.

                    Custom solutions to meet the needs of the constantly-evolving residential and hotel sectors; not only classic weaves,

                    but also fabrics for accessories that are rich in details and artisan craftsmanship
                </p>
            </div>
            <div style={{ display: 'flex', marginLeft: 10, marginTop: 10 }}>
                <p className='title'>Catalog</p>
            </div>
            <div>
                {
                    catalogs.map((c, i) => <div style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}><Catalog key={i} image={c.image} description={c.description} title={c.title} /></div>)
                }
            </div>

            <div style={{ display: 'flex', marginLeft: 10, marginTop: 20 }}>
                <p className='title'>Featured products</p>
            </div>

            <Row>

                {
                    products.data.map((c, i) => <Col md={4} sm={6} xs={12}><div style={{ marginTop: 10, }}><Product key={i} images={catalogs} product={c} title={c.name} /></div></Col>)
                }


            </Row>

            {/* <button>See more products</button> */}

            <div style={{ height: 50 }}></div>
            <Footer />
        
        </div>
    );
} 