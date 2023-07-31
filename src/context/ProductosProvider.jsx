import { ProductosContext } from "./ProductosContext"





export const ProductosProvider = ({children}) => {

   
    return(
        <ProductosContext.ProductosProvider >
            {children}
        </ProductosContext.ProductosProvider>
    )
}