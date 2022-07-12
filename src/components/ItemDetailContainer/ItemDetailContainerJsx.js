/* Importo Css */
import './ItemDetailContainer.css';

/* Importo componentes */
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetailJsx';
import { Container, Row , Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { iruvermu } from '../iruvermu/iruvermu';


function ItemDetailContainerJsx() {
    const [producto, setProducto] = useState([]);
    const [infoCargada, setInfoCargada] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const {productoid} = useParams();
    

    //UTILIZO PROMESAS PARA LEER EL ARCHIVO CON LA INFORMACION DE LOS PRODUCTOS
    //SI VIENE FILTRADO, MUESTRO POR ID
    useEffect(() => {
        setIsLoading(true)
        const getProducto  = new Promise ( (resolve) => {
            setTimeout(() => {
                const myData = iruvermu.find( i => i.id === productoid);
                    
                resolve(myData);
                    
            }, 2000);
        });

        getProducto.then((res) => setProducto(res))
        getProducto.catch((err) => console.log(err))
        .finally(() => {
            setInfoCargada(true) 
            setIsLoading(false)
        })

    }, [productoid]); 


    return (

        <div className='body'>
            <Container>
                <Row>
                    <Col className="colPadding">
                        {isLoading && (<h3>Cargando detalle...</h3>)}

                        {/* Con este condicional, siendo verdadero, renderizo */}
                        {infoCargada && <ItemDetail itemDetalle={producto} />}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ItemDetailContainerJsx;






