/* Importo Css */
import './Item.css';

/* Importo componentes */
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Item(producto) {

    const [verMas, setVerMas] = useState(false);


    const clickVerMas = () =>{
        setVerMas(true)
        console.log("esta aca")
    }

    return (
        <div className="cards">
            <Container>
                <Row>
                    <Col className='productoDescripcion'>
                        {/* Genero 7 filas para mostrar informacion del producto */}
                        <Container className="container">   
                            <Row>
                                <Col>   {/* Muesto la categoría */}
                                    <h2 className='categoria'>{producto.categoria}</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col>   {/* Muestro el nombre del producto */}
                                    <h1>{producto.producto}</h1>
                                </Col>
                            </Row>
                            <Row>   {/* Muestro la imagen */}
                                <Link to={`/producto/${producto.id}`}>
                                    <Col className='imagenPrincipal'>
                                        <img src={require(`../Assets/Img/${producto.img1}`)} alt={producto.producto} style={{ width: 'auto', height: '150px' }} />
                                    </Col>
                                </Link>
                            </Row>
                            <Row>
                                <Col>   {/* Muestro una breve descripcion */}
                                    <p>{producto.descripcion}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>   {/* Muestro el precio */}
                                    <div className='precio'>Precio: ${producto.precio}</div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>   {/* Muestro el stock */}
                                    <div className='stock'>Stock: {producto.stock}</div>
                                </Col>
                            </Row>
                            <Row>   {/* Boton para ver mas */}
                                <Link to={`/producto/${producto.id}`}>
                                    <Button className="verMas" onClick={clickVerMas} size="sm">Ver mas</Button>
                                    {verMas && true}
                                </Link>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Item;