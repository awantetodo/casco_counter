/* Importo componentes */
import React from "react";
import Item from '../Item/Item'
import { Container, Row } from 'react-bootstrap';

function ItemList({ listadoProductos }) {

    /*     console.log('listadoProductos',listadoProductos)
     */
    return (

        <Container fluid >

            <Row>
                {listadoProductos.map((product) => <Item
                    key={product.id}
                    id={product.id}
                    producto={product.producto}
                    descripcion={product.descripcion}
                    detalle={product.detalle}
                    stock={product.stock}
                    precio={product.precio}
                    img1={product.img1}
                    img2={product.img2}
                    categoria={product.categoria} />)}
            </Row>
        </Container>
    )
}

export default ItemList;