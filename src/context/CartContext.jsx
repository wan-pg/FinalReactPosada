import  { createContext, useState } from "react";


export const CartContext = createContext([]);

export const CartProvider = ({children}) => {

    const [productosAgregados, setProductosAgregados] = useState([])

    const addItem = (producto, quantity) => {  
        const {id, stock, ...rest} = producto      

        const siExiste = productosAgregados.some(
            items => items.id === producto.id)
            if(!siExiste)
                setProductosAgregados(prev => [
                    
                    ...prev, {id, producto, quantity},
                ])
            else{
                const actualizarPtos = productosAgregados.map(
                    producto => {
                        if(producto.id === rest.id)
                            return {
                                ...producto, quantity:producto.quantity + quantity,
                            }
                        else return producto

                    }
                )
                setProductosAgregados(actualizarPtos)
            }
    }

        const  deleteItem = id => {
            const otrosPtos = productosAgregados.filter(
                producto => producto.id !== id)
                setProductosAgregados(otrosPtos)
        }

        const clear = () => setProductosAgregados([])

        //Calcular cantidad

        const  totalQty = () => {
            let total = 0;
            productosAgregados.forEach((item) => {
              total += item.quantity;
            });
            return total;}

    
        
    return (
    <CartContext.Provider value= {{
        productosAgregados,
        addItem,
        clear,
        deleteItem,
        totalQty

    }}>{children}</CartContext.Provider>
    )
    
}