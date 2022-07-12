import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, Col, Container, Row } from 'react-bootstrap';
import React from 'react';

function ItemCart(props) {
    const producto = props.producto;

    return (
        <Col>
            <Card className='itemCarrito'>
                <Card.Body>
                    <Container>
                        <Row>
                            <Col xs={3}>
                                <img src={require(`../Assets/Img/vermu.jpg`)} alt={producto.nombre} className="imageThumb" />
                            </Col>
                            <Col xs={9}>
                                <h5 className='titulo'><strong>{producto.producto}</strong></h5>
                                <p className='marca'>{producto.categoria}</p>
                                <div className="mb-3 row">
                                    <label for="staticEmail" className="col-4 col-form-label textUnid">Unidades</label>
                                    <div className="col-2">
                                        <input type="text" className='form-control inputUnid' value={producto.stock} />
                                    </div>
                                </div>
                                <p className='precio'>${producto.precio}</p>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default ItemCart;