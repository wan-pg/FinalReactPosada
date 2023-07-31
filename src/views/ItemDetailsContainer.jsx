import {doc, getDoc, getFirestore} from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";


import { ItemDetail } from "../components/ItemDetail"



export const ItemDetailsContainer = () => {

    const [producto, setProducto] = useState([]) 

    const {id} = useParams()

    useEffect (()=>{

        const db = getFirestore();

        const refDoc = doc( db, "items", id);

        getDoc(refDoc).then((snapshot) => {
            setProducto({id:snapshot.id, ...snapshot.data()})
        });


    },[id]);


    return (
        <>
            <div><h1>Detalle </h1></div>
            <ItemDetail producto = {producto}/>
        </>
        
    )
}





   
    
