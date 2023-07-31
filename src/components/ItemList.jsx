import {Item} from "../components/Item"

export const ItemList = ({productos}) =>

   productos.map(producto =>(<Item key= {producto.id} producto = {producto} />))

    
 



    
    
    



    


    
    
    