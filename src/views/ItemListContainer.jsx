import {collection, getDocs, getFirestore} from "firebase/firestore";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";


import { ItemList } from "../components/ItemList";





export const ItemListContainer = () => {
 
const [productos, setProductos] = useState([])  
const {id}  = useParams() 




useEffect (() =>{

   const db = getFirestore();

   const itemsCollection = collection(db, "items");


    getDocs(itemsCollection).then((snapshot) => {
           
        if (id){
            setProductos(
                snapshot.docs.filter((doc) => doc.data().category === id).map((doc) => ({
                  id: doc.id,
                  ...doc.data(),
                }))
              );
        } else {
            setProductos((snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))));

        }
    
    });
},[id]);



    return (

        <>
        
        
        <div><h1>Productos</h1></div>
         <ItemList productos = {productos} />
        </>
        
    )
    
}