//CART CONTEXT PARA VINCULAR TODO
//Importo componentes de REACT
import {createContext, useState} from 'react';

//Exporto el CartContext para que una todo el contexto con Provider
export const CartContext = createContext({})

//Defino el provider del CartContext
const { Provider } = CartContext

//el CartProvider comparte un array por defaul y un children
export const CartProvider = ({defaultValue =[], children}) =>{

    //Defino el carrito: CART
    const [cart, setCart] = useState(defaultValue);
    
    //Funcion para limpiar el carrito!!!!
    const clearCart = () => {
        setCart([]);
    }

    //Funcion para agregar itema en el carrito
    const addToCart = (item, qty) =>{
        console.log(item) //Imprimo el carrito
        if (isInCart(item.id)) {    //Condicion: Si el item esta en el carrito, no lo agrego nuevo, sino que sumo su cantidad por la nueva
            const newCart = [...cart]
            for (const element of newCart){
                if (element.item.id === item.id) {
                    element.qty = element.qty + qty;
                }
            }
            setCart(newCart);   //Pisa el carrito con el nuevo
        } else {
            //Si no esta dentro del array, lo agrego como un item nuevo
        setCart( 
            [
                ...cart,
                {
                    item: item,
                    qty: qty,
                }
            ]
        )
        }
    }

    //Funcion para eliminar el item
    const removeFromCart = (id) => {
        const newCart = [...cart].filter(element => element.item.id !== id) //Filtro el nuevo carrito EXCLUYENDO el item a borrar
        setCart(newCart)    //Pisa el carrito con el nuevo

    }

    //Funcion booleana para encontrar un item dentro del ARRAY. Si lo encuentra, esta funcion es TRUE
    const isInCart = (id) =>{
        return cart.find((element) => element.item.id === id) 
    }

    //Funcion para mas adelante, para tener la cantidad de items dentro del carrito recorriendo el array
    const getQty = () => {
        let cantidad = 0
        cart.forEach((element) => cantidad = cantidad + element.qty) 
        return cantidad
    }

    //Aca se obtiene el monto total del carrito recorriendo el array
    const getTotal = () => {
        let total = 0
        cart.forEach((element) =>{
            total = total + (element.qty * element.item.precio)
        })
        return total
    }

    //Imprimo en consola el carrito
    console.log("Carrito: ", cart)

    //Comparto en el contexto el carrito, limpiar el carrito, agregar al carrito, eliminar del carrito, cantidad de items dentro del carrito y el total del carrito
    const context = {
        cart,
        clearCart,
        addToCart,
        removeFromCart,
        getQty,
        getTotal
    }

    
    return (
        <Provider value={context}>
            {children}
        </Provider>
    )
}

export default CartContext;