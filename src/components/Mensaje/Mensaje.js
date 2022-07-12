/* Importo Css */
import './Mensaje.css'


function Mensaje({numero, stock}){

    /* Condicional para que no sume mas alla del stock */
    if (numero === stock){
        return(
            <div>
                {/* Aviso que no hay mas stock */}
                <p className="noStock">No hay mas stock!</p>
            </div>
        )
    }

    /* Condicional para que no tenga numeros negativos */
    if (numero === 0){
        return(
            <div>
                {/* Aviso que el carrito esta en 0, vacio */}
                <p className="carritoVacio">Su carrito está vacío</p>
            </div>
        )
    }
}

export default Mensaje;