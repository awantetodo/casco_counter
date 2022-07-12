import './Cart.css';

import { Col, Container, Row } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

import { iruvermu } from '../iruvermu/iruvermu';

/* import { useParams } from 'react-router-dom';
 */import ItemCart from '../ItemCart/ItemCart';
import TotalCart from '../TotalCart/TotalCart';


function Cart() {
    const [producto, setProducto] = useState([]);
/*     const {productoid} = useParams();
 */
    useEffect(() => {
        const getProducto  = new Promise ( (resolve) => {
            setTimeout(() => {
                const myData = iruvermu.find( i => i.id === "1");
                    
                resolve(myData);
                    
            }, 2000);
        });

        getProducto.then((res) => setProducto(res))
        getProducto.catch((err) => console.log(err))
/*         .finally(() => {
            setInfoCargada(true) 
            setIsLoading(false)
        }) */

    }, []);


    return (
            <Container className='body'>
                <Row>
                    <Col className="colPadding">
                        <h3 className='pb-4 titulo'>Tu carrito de compras</h3>

                        <Container>
                            <Row>
                                <Col md={8} className="contenedorDetalles">
                                    <ItemCart producto={producto} />
                                </Col>
                                <Col md={4}>
                                    <TotalCart />
                                </Col>
                            </Row>
                        </Container>

                    </Col>
                </Row>
            </Container>
    );
}

export default Cart;