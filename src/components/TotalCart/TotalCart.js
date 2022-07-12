import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, Col, Container, Row } from 'react-bootstrap';

import { Link } from "react-router-dom";
import React from 'react';

function ItemCart(props) {
    return (
        <Col>
            <Card className='itemCarrito'>
                <Card.Body>
                    <Container>
                        <Row>
                            <Col className='colTotales'>
                                <h4>Resumen</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='colTotales'>
                                <Container>
                                    <Row>
                                        <Col className='totalText'>Total:</Col>
                                        <Col className='totalPrecio'>$00000</Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='colTotales'>
                                <Link to="#" className="btn btn-lg buttonAccent float-end"> Finalizar compra</Link>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default ItemCart;